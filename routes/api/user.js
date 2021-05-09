const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const notesController = require("../../controllers/notesController");
const reviewsController = require("../../controllers/reviewsController");
const eventsController = require("../../controllers/eventsController");

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

router.get("/notes/starred/:id", notesController.getStarredNotes);

router.get("/notes/search/:id/q=:query", notesController.searchNotes);

router.route("/note")
  .post(notesController.createNote, (req, res) => {
    res.status(200).send("Note successfully created!")
  })

router.route("/note/:id")
  .put(notesController.updateNote)
  .delete(notesController.deleteNote)

// Review routes 
router.route("/review/:id")
  .post(reviewsController.createReview)
  .put(reviewsController.updateReview)
  .get(reviewsController.getReview)
  .delete(reviewsController.deleteReview)

router.get("/reviews", reviewsController.getAllReviews);

// Event routes 
router.get("/events", eventsController.getEvents);

router.route("/event")
  .post(eventsController.createEvent)

module.exports = router;