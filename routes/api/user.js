const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
  .post(usersController.signUp);

module.exports = router;