const db = require("../models");

const notesController = {
  getNotes: function(req, res) {
    console.log(req.params.id)
    db.note
      .findAll({
        where: {
          userId: parseInt(req.params.id)
        }
      })
      .then(notes => res.json(notes))
      .catch(err => console.log(err))
  },
  createNote: function(req, res) {
    console.log(req.body)
    db.note
      .create({
        starred: req.body.starred,
        title: req.body.title,
        text: req.body.text,
        propertyAddress: req.body.propertyAddress,
        userId: req.body.userId
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
};

module.exports = notesController;