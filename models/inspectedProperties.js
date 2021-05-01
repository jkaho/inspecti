// Creates User model
module.exports = function(sequelize, DataTypes) {
  const InspectedProperties = sequelize.define("inspectedProperties", {
    dateInspected: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
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
    hadAuction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, { freezeTableName: true });

  return InspectedProperties;
};