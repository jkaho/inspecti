const db = require("../models");

const notesController = {
  getNotes: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.params.id)
        }
      })
      .then(notes => res.json(notes))
      .catch(err => console.log(err))
  },
  getStarredNotes: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.params.id),
          starred: true
        }
      })
      .then(notes => res.json(notes))
      .catch(err => console.log(err))
  },
  createNote: function(req, res) {
    db.note
      .create({
        starred: req.body.starred,
        title: req.body.title,
        text: req.body.text,
        propertyAddress: req.body.propertyAddress,
        userId: req.body.userId,
        hasReview: false,
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  updateNote: function(req, res) {
    db.note
      .update(
        {
          starred: req.body.starred,
          title: req.body.title,
          text: req.body.text,
          propertyAddress: req.body.propertyAddress,
          bedrooms: req.body.bedrooms,
          bathrooms: req.body.bathrooms,
          carSpaces: req.body.carSpaces,
          landSize: req.body.landSize,
          hasReview: req.body.hasReview
        }, 
        {
          where: {
            id: parseInt(req.params.id)
          }
        }
      )
      .then(updatedNote => res.json(updatedNote))
      .catch(err => res.status(422).json(err))
  },
  deleteNote: function(req, res) {
    db.note
      .destroy(
        {
          where: {
            id: parseInt(req.params.id)
          }
        }
      )
      .then(deletedNote => res.json(deletedNote))
      .catch(err => res.status(422).json(err))
  }
};

module.exports = notesController;