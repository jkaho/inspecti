const db = require("../models");
const { Op } = require("sequelize");

const propertiesController = {
  getProperties: function(req, res) {
    db.inspectedProperties
      .findAll({
        where: {
          userId: parseInt(req.user.id)
        }
      })
      .then(properties => res.json(properties))
      .catch(err => console.log(err));
  },
  getPropertyNotes: function(req, res) {
    db.inspectedProperties
      .findAll({
        include: [db.note],
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
        hadAuction: req.body.hadAuction,
        userId: req.user.id,
      })
      .then(propertyEntry => res.json(propertyEntry))
      .catch(err => res.status(422).json(err));
  },
};

module.exports = propertiesController;