const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");

router.route("/signup")
  .post(usersController.signUp);

router.route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

module.exports = router;