// Creates User model
module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("review", {
    shared: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
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
    Review.hasOne(models.note, {
      foreignKey: {
        name: "reviewId",
        allowNull: true
      },
      onDelete: "SET NULL"
    });

    Review.belongsTo(models.note)
  }

  return Review;
};
