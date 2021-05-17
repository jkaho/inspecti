const db = require("../models");
// const { Op } = require("sequelize");

const propertiesController = {
  getProperties: function(req, res) {
    db.inspectedProperties
      .findAll({
        where: {
          userId: parseInt(req.user.id)
        }
      })
      .then(properties => res.json(properties))
      .catch(err => res.status(422).json(err));
  },
  getOneProperty: function(req, res) {
    db.inspectedProperties
      .findOne({
        where: {
          id: parseInt(req.params.id)
        }
      })
      .then(property => res.json(property))
      .catch(err => res.status(422).json(err));
  },
  getPropertyNotes: function(req, res) {
    db.inspectedProperties
      .findAll({
        include: {
          model: db.note,
          include: {
            model: db.review
          }
        },
        order: [["dateInspected", "DESC"]]
        // where: {
        //   propertyAddress: {
        //     [Op.like]: "%" + req.params.query + "%"
        //   }
        // }
      })
      .then(results => res.json(results))
      .catch(err => console.log(err));
  },
  createPropertyEntry: function(req, res) {
    db.inspectedProperties
      .create({
        dateInspected: req.body.dateInspected,
        propertyAddress: req.body.propertyAddress,
        propertyType: req.body.propertyType,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        carSpaces: req.body.carSpaces,
        landSize: req.body.landSize,
        priceGuide: req.body.priceGuide,
        soldPrice: req.body.soldPrice,
        attendedAuction: req.body.attendedAuction,
        userId: req.user.id,
      })
      .then(propertyEntry => res.json(propertyEntry))
      .catch(err => res.status(422).json(err));
  },
  updatePropertyEntry: function(req, res) {
    db.inspectedProperties
      .update(
        {
          dateInspected: req.body.dateInspected,
          priceGuide: req.body.priceGuide,
          soldPrice: req.body.soldPrice,
          attendedAuction: req.body.attendedAuction
        },
        {
          where: {
            id: parseInt(req.params.id)
          }
        }
      )
      .then(updatedPropertyEntry => res.json(updatedPropertyEntry))
      .catch(err => res.status(422).json(err));
  },
  deletePropertyEntry: function(req, res) {
    db.inspectedProperties
      .destroy({
        where: {
          id: parseInt(req.params.id)
        }
      })
      .then(deletedPropertyEntry => res.json(deletedPropertyEntry))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = propertiesController;