const db = require("../models");

const propertiesController = {
  getProperties: function(req, res) {
    db.inspectedProperties
      .findAll({
        where: {
          userId: parseInt(req.user.id)
        }
      })
      .then(properties => res.json(properties))
      .catch(err => console.log(err))
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
        userId: req.body.userId,
      })
      .then(propertyEntry => res.json(propertyEntry))
      .catch(err => res.status(422).json(err))
  },
};

module.exports = propertiesController;