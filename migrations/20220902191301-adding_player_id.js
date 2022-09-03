'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.addColumn('Attackings', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('Attempts', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('Defendings', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('Disciplinaries', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('Distributions', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('GoalKeepings', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('Goals', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
      queryInterface.addColumn('KeyStats', 'playerid',{
      type: Sequelize.DataTypes.INTEGER}, { transaction: t })
  ]);
  });
  },

   down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Attackings', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('Attempts', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('Defendings', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('Disciplinaries', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('Distributions', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('GoalKeepings', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('Goals', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t }),
        queryInterface.removeColumn('KeyStats', 'playerid',{
        type: Sequelize.DataTypes.INTEGER}, { transaction: t })
    ]);
    });
  }
};
