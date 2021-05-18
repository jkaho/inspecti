// Require bcrypt for password hashing 
const bcrypt = require("bcryptjs");

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
    User.hasMany(models.note, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });

    User.hasMany(models.review, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    
    User.hasMany(models.inspectedProperties, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });

    User.hasMany(models.scheduledEvents, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  // Create custom method for user model to check if unhashed pw can be compared to db-stored pw
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hash passwords before user is created
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  
  return User;
};
