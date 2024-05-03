const { DataTypes } = require('sequelize');
const db = require('../DB/dbConnect');

const Musics = db.define(
  'Musics',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sound: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
);

module.exports = Musics;