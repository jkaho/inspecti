const db = require("../models");

const reviewsController = {
  getAllReviews: function(req, res) {
    db.review
      .findAll()
      .then(reviews => res.json(reviews))
      .catch(err => res.status(422).json(err))
  },
  getReview: function(req, res) {
    console.log(req.params)
    db.review
      .findOne({
        where: {
          noteId: parseInt(req.params.id)
        }
      })
      .then(review => res.json(review))
      .catch(err => res.status(422).json(err))
  },
  createReview: function(req, res) {
    console.log(req.user.id)
    db.review
      .create({
        propertyConditionRating: req.body.propertyConditionRating,
        potentialRating: req.body.potentialRating,
        surroundingsRating: req.body.surroundingsRating,
        neighbourComparisonRating: req.body.neighbourComparisonRating,
        accessibilityRating: req.body.accessibilityRating,
        privacyRating: req.body.privacyRating,
        floorplanRating: req.body.floorplanRating,
        outdoorSpaceRating: req.body.outdoorSpaceRating,
        indoorOutdoorFlowRating: req.body.indoorOutdoorFlowRating,
        naturalLightRating: req.body.naturalLightRating,
        userId: req.user.id,
        noteId: req.params.id
      })
      .then(newReview => res.json(newReview))
      .catch(err => res.status(422).json(err))
  },
  updateReview: function(req, res) {
    db.review
      .update(
        {
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
          userId: req.user.id
        }, 
        {
          where: {
            noteId: parseInt(req.params.id)
          }
        }
      )
      .then(updatedReview => res.json(updatedReview))
      .catch(err => res.status(422).json(err))
  },
  deleteReview: function(req, res) {
    db.review
      .destroy( 
        {
          where: {
            noteId: parseInt(req.params.id)
          }
        }
      )
      .then(deletedReview => res.json(deletedReview))
      .catch(err => res.status(422).json(err))
  }
};

module.exports = reviewsController;