// Creates User model
module.exports = function(sequelize, DataTypes) {
  const Note = sequelize.define("note", {
    shared: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
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
  });

  return Note;
};
