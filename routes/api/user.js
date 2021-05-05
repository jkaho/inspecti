const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");

router.post("/signup", usersController.signUp, (req, res) => {
  req.login(user, function(err) {
    if (err) { return next(err); }
    return res.json(req.user);
  });
});

router.post("/login", passport.authenticate("local", { session: true }), (req, res) => {
  console.log(req.user)
  return res.json(req.user);
});

// router.get("/login", passport.authenticate("local", { session: true }), (req, res) => {
//   console.log(req.user)
//    res.json(req.user);
// });

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

// const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, id: req.user.id });
  } 
  return res.json({ isAuthenticated: false });
});

module.exports = router;