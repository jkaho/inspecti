const db = require("../models");
const { Op } = require("sequelize");

const notesController = {
  getNotes: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.user.id)
        },
        order: [["updatedAt", "DESC"]]
      })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err));
  },
  getNotesWithReviews: function(req, res) {
    db.note
      .findAll({
        include: [
          {
            model: db.review
          },
          { 
            model: db.user,
            attributes: ["firstName", "lastName", "email", "id"]
          }
        ],
        where: {
          userId: parseInt(req.user.id)
        },
        order: [["updatedAt", "DESC"]]
      })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err));
  },
  getSharedNotes: function(req, res) {
    db.note
      .findAll({
        include: [
          {
            model: db.review
          },
          { 
            model: db.user,
            attributes: ["firstName", "lastName", "email", "id"]
          }
        ],
        where: {
          shared: true
        },
        order: [["dateShared", "DESC"]]
      })
      .then(sharedNotes => res.json(sharedNotes))
      .catch(err => res.status(422).json(err));
  },
  getOneNote: function(req, res) {
    db.note
      .findOne({
        where: {
          id: parseInt(req.params.id)
        }
      })
      .then(note => res.json(note))
      .catch(err => res.status(422).json(err));
  },
  getStarredNotes: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.user.id),
          starred: true
        },
        order: [["updatedAt", "DESC"]]
      })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err))
  },
  searchNotes: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.user.id),
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + req.params.query + "%"
              }
            },
            {
              text: {
                [Op.like]: "%" + req.params.query + "%"
              }
            },
            {
              propertyAddress: {
                [Op.like]: "%" + req.params.query + "%"
              }
            }
          ]
        },
        order: [["updatedAt", "DESC"]]
      })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err))
  },
  searchNoteAddress: function(req, res) {
    db.note
      .findAll({
        where: {
          userId: parseInt(req.user.id),
          propertyAddress: {
            [Op.like]: "%" + req.params.query + "%"
          }
        },
        order: [["updatedAt", "DESC"]]
      })
      .then(notes => res.json(notes))
      .catch(err => res.status(422).json(err));
  },
  createNote: function(req, res) {
    db.note
      .create({
        starred: req.body.starred,
        title: req.body.title,
        text: req.body.text,
        propertyAddress: req.body.propertyAddress,
        userId: parseInt(req.user.id),
        propertyId: req.body.propertyId,
        hasReview: req.body.hasReview ? req.body.hasReview : false,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        carSpaces: req.body.carSpaces,
        landSize: req.body.landSize
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  updateNote: function(req, res) {
    db.note
      .update(
        {
          starred: req.body.starred,
          shared: req.body.shared,
          dateShared: req.body.dateShared,
          title: req.body.title,
          text: req.body.text,
          propertyAddress: req.body.propertyAddress,
          bedrooms: req.body.bedrooms,
          bathrooms: req.body.bathrooms,
          carSpaces: req.body.carSpaces,
          landSize: req.body.landSize,
          hasReview: req.body.hasReview,
          propertyId: req.body.propertyId
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