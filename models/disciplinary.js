'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplinary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Disciplinary.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    fouls_committed: DataTypes.INTEGER,
    fouls_suffered: DataTypes.INTEGER,
    red: DataTypes.INTEGER,
    yellow: DataTypes.INTEGER,
    minutes_played: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Disciplinary',
  });
  return Disciplinary;
};