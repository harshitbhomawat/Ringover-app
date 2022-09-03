'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Defending extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Defending.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    balls_recovered: DataTypes.INTEGER,
    tackles: DataTypes.INTEGER,
    t_won: DataTypes.INTEGER,
    t_lost: DataTypes.INTEGER,
    clearance_attempted: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Defending',
  });
  return Defending;
};