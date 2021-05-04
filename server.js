// Require dependencies
const express = require("express");
const session = require("express-session");

// Require models for syncing 
const db = require("./models");;

// Require configured passport file 
const passport = require("./config/passport");

// Set up PORT 
const PORT = process.env.PORT || 3001;

// Create Express app 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require CORS for sending front-end API to back-end server across urls
const cors = require('cors');
app.use(cors());

// Set up sessions to keep track of user's login status
app.use(
  session({ secret: "happy donkey", resave: false, saveUninitialized: false })
);

// Use passport middleware 
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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