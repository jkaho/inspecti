const db = require("../models");
const { Op } = require("sequelize");

const eventsController = {
  getEvents: function(req, res) {
    db.scheduledEvents
      .findAll({
        where: {
          userId: parseInt(req.user.id)
        }
      })
      .then(events => res.json(events))
      .catch(err => console.log(err))
  },
  getDailyEvents: function(req, res) {
    db.scheduledEvents
      .findAll({
        where: {
          date: {
            [Op.like]: "%" + req.params.date + "%"
          }
        }
      })
      .then(dailyEvents => res.json(dailyEvents))
      .catch(err => console.log(err))
  },
  createEvent: function(req, res) {
    db.scheduledEvents
      .create({
        eventType: req.body.eventType,
        date: req.body.date,
        propertyAddress: req.body.propertyAddress,
        propertyType: req.body.propertyType,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        carSpaces: req.body.carSpaces,
        landSize: req.body.landSize,
        hasAuction: req.body.hasAuction,
        userId: req.user.id
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
};

module.exports = eventsController;