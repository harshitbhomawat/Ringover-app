'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attempts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attempts.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    total_attempts: DataTypes.INTEGER,
    on_target: DataTypes.INTEGER,
    off_target: DataTypes.INTEGER,
    blocked: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attempts',
  });
  return Attempts;
};