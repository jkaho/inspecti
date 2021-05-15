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
  getOneUser: function(req, res) {
    console.log(req.params)
    db.user
      .findOne({
        where: {
          id: parseInt(req.params.id)
        }
      })
      .then(user => res.json(user))
      .catch(err => console.log(err))
  },
  getAllUsers: function(req, res) {
    db.user
      .findAll({})
      .then(users => res.json(users))
      .catch(err => console.log(err));
  },
};

module.exports = usersController;