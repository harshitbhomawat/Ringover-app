'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goals.init({
    playerid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    right_foot: DataTypes.INTEGER,
    left_foot: DataTypes.INTEGER,
    headers: DataTypes.INTEGER,
    others: DataTypes.INTEGER,
    inside_area: DataTypes.INTEGER,
    outside_area: DataTypes.INTEGER,
    penalties: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Goals',
  });
  return Goals;
};