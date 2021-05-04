const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");

router.post("/signup", usersController.signUp);

router.post("/login", passport.authenticate("local"), (req, res) => {
  req.session.user = req.user;
  res.json(req.user)
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

// const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true });
  } 
  return res.json({ isAuthenticated: false });
});




module.exports = router;