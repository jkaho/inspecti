// Creates User model
module.exports = function(sequelize, DataTypes) {
  const ScheduledEvents = sequelize.define("scheduledEvents", {
    eventType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 20]
      }
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    carSpaces: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    landSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    priceGuide: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hasAuction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, { freezeTableName: true });

  return ScheduledEvents;
};
