const db = require("../models");

const usersController = {
  signUp: function(req, res) {
    db.user
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
};

module.exports = usersController;