'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalKeeping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GoalKeeping.init({
    player_name: DataTypes.STRING,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    saved: DataTypes.INTEGER,
    conceded: DataTypes.INTEGER,
    saved_penalties: DataTypes.INTEGER,
    cleansheets: DataTypes.INTEGER,
    punches_made: DataTypes.INTEGER,
    match_played: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GoalKeeping',
  });
  return GoalKeeping;
};