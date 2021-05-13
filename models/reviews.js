// Creates User model
module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("review", {
    propertyConditionRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    potentialRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    surroundingsRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    neighbourComparisonRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    accessibilityRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    privacyRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    floorplanRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    outdoorSpaceRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    indoorOutdoorFlowRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    naturalLightRating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Review.associate = models => {
    Review.belongsTo(models.note);

    Review.belongsTo(models.user);
  }

  return Review;
};
