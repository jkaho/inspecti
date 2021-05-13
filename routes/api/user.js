const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const notesController = require("../../controllers/notesController");
const reviewsController = require("../../controllers/reviewsController");
const eventsController = require("../../controllers/eventsController");
const propertiesController = require("../../controllers/propertiesController");

// User routes
router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, id: req.user.id });
  } 
  return res.json({ isAuthenticated: false });
});

router.post("/signup", usersController.signUp, (req, res) => {
  req.login(user, function(err) {
    if (err) { return next(err); }
    return res.json(req.user);
  });
});

router.post("/login", passport.authenticate("local", { session: true }), (req, res) => {
  return res.json(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

router.get("/find/:id", usersController.getOneUser);

// Note routes 
router.get("/notes/:id", notesController.getNotes);

router.get("/notes/reviews/:id", notesController.getNotesWithReviews);

router.get("/shared", notesController.getSharedNotes);

router.get("/notes/starred/:id", notesController.getStarredNotes);

router.get("/notes/search/q=:query", notesController.searchNotes);

router.get("/notes/address/q=:query", notesController.searchNoteAddress);

router.route("/note")
  .post(notesController.createNote, (req, res) => {
    res.status(200).send("Note successfully created!")
  })

router.route("/note/:id")
  .get(notesController.getOneNote)
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

router.get("/events/:startTime/:endTime", eventsController.getDailyEvents);

router.route("/event")
  .post(eventsController.createEvent)

router.route("/event/:id")
  .put(eventsController.updateEvent)
  .delete(eventsController.deleteEvent)

// Inspected Properties routes
router.get("/properties", propertiesController.getProperties);

router.get("/property/notes", propertiesController.getPropertyNotes);

router.post("/property", propertiesController.createPropertyEntry);

router.route("/property/:id")
  .put(propertiesController.updatePropertyEntry)
  .delete(propertiesController.deletePropertyEntry);

module.exports = router;