'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Distribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Distribution.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    pass_accuracy: DataTypes.DOUBLE,
    pass_attempted: DataTypes.INTEGER,
    pass_completed: DataTypes.INTEGER,
    cross_accuracy: DataTypes.DOUBLE,
    cross_attempted: DataTypes.INTEGER,
    cross_completed: DataTypes.INTEGER,
    freekicks_taken: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Distribution',
  });
  return Distribution;
};