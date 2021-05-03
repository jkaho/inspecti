// Require dependencies
const express = require("express");
const session = require("express-session");

// Require models for syncing 
const db = require("./models");;

// Set up PORT 
const PORT = process.env.PORT || 3001;

// Create Express app 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Serve up static assets (on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up sessions to keep track of user's login status
app.use(
  session({ secret: "happy donkey", resave: true, saveUninitialized: true })
);

// API Routes
const routes = require("./routes");
app.use(routes);

// Send every other request to the React app
const path = require("path")
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Sync database and log message upon success 
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});