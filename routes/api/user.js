const router = require("express").Router();
const axios = require("axios");
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const notesController = require("../../controllers/notesController");
const reviewsController = require("../../controllers/reviewsController");
const eventsController = require("../../controllers/eventsController");
const propertiesController = require("../../controllers/propertiesController");

// User routes
router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, 
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email
    });
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

router.get("/all", usersController.getAllUsers);

// Note routes 
router.get("/notes", notesController.getNotes);

router.get("/notes/reviews", notesController.getNotesWithReviews);

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
router.get("/reviews", reviewsController.getAllReviews);

router.route("/review/:id")
  .post(reviewsController.createReview)
  .put(reviewsController.updateReview)
  .get(reviewsController.getReview)
  .delete(reviewsController.deleteReview)

// Event routes 
router.get("/events", eventsController.getEvents);

router.get("/events/:startTime/:endTime", eventsController.getDailyEvents);

router.post("/event", eventsController.createEvent);

router.route("/event/:id")
  .put(eventsController.updateEvent)
  .delete(eventsController.deleteEvent)

// Inspected Properties routes
router.get("/properties", propertiesController.getProperties);

router.get("/property/notes", propertiesController.getPropertyNotes);

router.post("/property", propertiesController.createPropertyEntry);

router.route("/property/:id")
  .get(propertiesController.getOneProperty)
  .put(propertiesController.updatePropertyEntry)
  .delete(propertiesController.deletePropertyEntry);

// Domain API 
router.get("/domain/location/q=:query", function(req, res) {
  axios.get("https://api.domain.com.au/v1/listings/locations?terms=" + req.params.query + "&pageNumber=1&pageSize=10",
    { 
      headers: {
        "X-Api-Key": process.env.DOMAIN_API_KEY
      }
    }
  )
  .then(result => {
    res.json(result.data);
  })
  .catch(err => console.log(err));
});

router.get("/domain/address/q=:query", function(req, res) {
  axios.get("https://api.domain.com.au/v1/properties/_suggest?terms=" + req.params.query + "&channel=Residential",
    { 
      headers: {
        "X-Api-Key": process.env.DOMAIN_API_KEY
      }
    }
  )
  .then(result => {
    res.json(result.data);
  })
  .catch(err => console.log(err));
});

router.get("/domain/property/q=:query", function(req, res) {
  axios.get("https://api.domain.com.au/v1/properties/" + req.params.query,
    { 
      headers: {
        "X-Api-Key": process.env.DOMAIN_API_KEY
      }
    }
  )
  .then(result => res.json(result.data))
  .catch(err => console.log(err));
});

router.post("/domain/listings", function(req, res) {
  axios.post("https://api.domain.com.au/v1/listings/residential/_search",
    req.body,
    { 
      headers: {
        "X-Api-Key": process.env.DOMAIN_API_KEY
      }
    }, 
  )
  .then(result => res.json(result.data))
  .catch(err => console.log(err));
});

module.exports = router;