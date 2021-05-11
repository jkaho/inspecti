// Creates User model
module.exports = function(sequelize, DataTypes) {
  const InspectedProperties = sequelize.define("inspectedProperties", {
    dateInspected: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    propertyAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
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
    hadAuction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, { freezeTableName: true });

  InspectedProperties.associate = models => {
    InspectedProperties.hasMany(models.note, {
      foreignKey: {
        name: "propertyId",
        allowNull: true
      },
      onDelete: "CASCADE"
    });
    
    InspectedProperties.belongsTo(models.user);
  };
  
  return InspectedProperties;
};
