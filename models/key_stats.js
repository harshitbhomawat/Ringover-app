'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KeyStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KeyStats.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    minutes_played: DataTypes.INTEGER,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    distance_covered: DataTypes.DOUBLE,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KeyStats',
  });
  return KeyStats;
};