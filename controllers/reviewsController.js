const db = require("../models");

const reviewsController = {
  getAllReviews: function(req, res) {
    db.review
      .findAll()
      .then(reviews => res.json(reviews))
      .catch(err => console.log(err))
  },
  getReview: function(req, res) {
    db.review
      .find({
        where: {
          noteId: parseInt(req.params.id)
        }
      })
      .then(review => res.json(review))
      .catch(err => console.log(err))
  },
  createReview: function(req, res) {
    console.log(req.body)
    console.log(req.params)
    console.log(req.user.id)
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
        naturalLightRating: req.body.naturalLightingRating,
        userId: req.user.id,
        noteId: req.params.id
      })
      .then(newNote => res.json(newNote))
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