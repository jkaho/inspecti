const db = require("../models");

const notesController = {
  getNotes: function(req, res) {
    console.log(req.body)
    db.note
      .findAll({
        // where: {
        //   userId: req.body
        // }
      })
      .then(notes => res.json(notes))
      .catch(err => console.log(err))
  },
  createNote: function(req, res) {
    db.note
      .create({
        title: req.body.title,
        text: req.body.text,
        propertyAddress: req.body.propertyAddress,
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
};

module.exports = notesController;