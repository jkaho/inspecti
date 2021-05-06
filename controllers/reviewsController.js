const db = require("../models");

const reviewsController = {
  getReview: function(req, res) {
    db.review
      .find({
        where: {
          noteId: parseInt(req.params.id)
        }
      })
      .then(notes => res.json(notes))
      .catch(err => console.log(err))
  },
  createReview: function(req, res) {
    db.review
      .create({
        shared: req.body.shared,
        propertyConditionRating: req.body.propertyConditionRating,
        potentialRating: req.body.potentialRating,
        surroundingsRating: req.body.surroundingsRating,
        neighbourComparisonRating: req.body.neighbourComparisonRating,
        accessibilityRating: req.body.accessibilityRating,
        privacyRating: req.body.privacyRating,
        floorplanRating: req.body.floorplanRating,
        outdoorSpaceRating: req.body.outdoorSpaceRating,
        indoorOutdoorFlowRating: req.body.indoorOutdoorFlowRating,
        naturalLightingRating: req.body.naturalLightingRating,
        userId: req.user.id,
        noteId: req.params.id
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  updateReview: function(req, res) {
    db.review
      .update(
        {
          shared: req.body.shared,
          propertyConditionRating: req.body.propertyConditionRating,
          potentialRating: req.body.potentialRating,
          surroundingsRating: req.body.surroundingsRating,
          neighbourComparisonRating: req.body.neighbourComparisonRating,
          accessibilityRating: req.body.accessibilityRating,
          privacyRating: req.body.privacyRating,
          floorplanRating: req.body.floorplanRating,
          outdoorSpaceRating: req.body.outdoorSpaceRating,
          indoorOutdoorFlowRating: req.body.indoorOutdoorFlowRating,
          naturalLightingRating: req.body.naturalLightingRating,
          userId: req.user.id,
          noteId: req.params.id
        }, 
        {
          where: {
            id: parseInt(req.params.id)
          }
        }
      )
      .then(updatedNote => res.json(updatedNote))
      .catch(err => res.status(422).json(err))
  }
};

module.exports = reviewsController;