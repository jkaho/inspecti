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
    console.log(req.params)
    db.scheduledEvents
      .findAll({
        where: {
          startTime: {
            [Op.between]: [req.params.startTime, req.params.endTime]
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
        startTime: req.body.startTime,
        endTime: req.body.endTime,
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
  updateEvent: function(req, res) {
    console.log(req.body)
    db.scheduledEvents
      .update({
        eventType: req.body.eventType,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
      }, {
        where: {
          id: parseInt(req.params.id)
        }
      })
      .then(updatedEvent => res.json(updatedEvent))
      .catch(err => console.log(err))
  },
  deleteEvent: function(req, res) {
    db.scheduledEvents
      .destroy(
        {
          where: {
            id: parseInt(req.params.id)
          }
        }
      )
      .then(deletedEvent => res.json(deletedEvent))
      .catch(err => res.status(422).json(err))
  }
};

module.exports = eventsController;