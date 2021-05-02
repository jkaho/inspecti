// Creates User model
module.exports = function(sequelize, DataTypes) {
  const AttendedAuctions = sequelize.define("attendedAuctions", {
    dateAttended: {
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
    soldPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, { freezeTableName: true });

  AttendedAuctions.associate = models => {
    AttendedAuctions.belongsTo(models.user);
  };
  
  return AttendedAuctions;
};
