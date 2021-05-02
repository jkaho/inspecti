// Creates User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
        // is: ["^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"]
      }
    },
  });

  User.associate = models => {
    User.hasMany(models.notes, {
      foreignKey: {
        name: "userId",
        allowNull: true
      },
      onDelete: "CASCADE"
    });
    
    User.hasMany(models.inspectedProperties, {
      foreignKey: {
        name: "userId",
        allowNull: true
      },
      onDelete: "CASCADE"
    });

    User.hasMany(models.attendedAuctions, {
      foreignKey: {
        name: "userId",
        allowNull: true
      },
      onDelete: "CASCADE"
    });

    User.hasMany(models.scheduledEvents, {
      foreignKey: {
        name: "userId",
        allowNull: true
      },
      onDelete: "CASCADE"
    });
  };

  return User;
};
