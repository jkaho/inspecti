const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const notesController = require("../../controllers/notesController");

// Authentication route 
router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, id: req.user.id });
  } 
  return res.json({ isAuthenticated: false });
});

// Signup route 
router.post("/signup", usersController.signUp, (req, res) => {
  req.login(user, function(err) {
    if (err) { return next(err); }
    return res.json(req.user);
  });
});

// Logut route
router.post("/login", passport.authenticate("local", { session: true }), (req, res) => {
  return res.json(req.user);
});

// Login route 
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

// Note routes 
router.get("/notes/:id", notesController.getNotes);

router.route("/note")
  .post(notesController.createNote, (req, res) => {
    res.status(200).send("Note successfully created!")
  })
  // .put()

// router.delete("/note/id");

module.exports = router;