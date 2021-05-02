// Creates User model
module.exports = function(sequelize, DataTypes) {
  const Note = sequelize.define("note", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    propertyAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Note.associate = models => {
    Note.hasOne(models.review, {
      foreignKey: {
        name: "noteId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });

    Note.belongsTo(models.user)
  };

  return Note;
};
