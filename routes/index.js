const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// Starts user session 
/*
  AUTHENTICATION
  if (req.session.cookie === "authenticated") {
    // render page
  } 
  
  return res.redirect("/login");

  COUNT VISIT 
  if (req.session.countVisit) {
    req.session.countVisit++;
  } else {
    req.session.countVisit = 1;
  }

*/