'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('log2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacher_id: {
        type: Sequelize.INTEGER
      },
      student_lname: {
        type: Sequelize.STRING
      },
      student_fname: {
        type: Sequelize.STRING
      },
      intervention_type: {
        type: Sequelize.STRING
      },
      intervention_date: {
        type: Sequelize.DATE
      },
      follow_up_date: {
        type: Sequelize.DATE
      },
      notes: {
        type: Sequelize.STRING
      },
      point_of_contact: {
        type: Sequelize.STRING
      },
      teacher_lname: {
        type: Sequelize.STRING
      },
      teacher_fname: {
        type: Sequelize.STRING
      },
      name_of_contact: {
        type: Sequelize.STRING
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('log2s');
  }
};