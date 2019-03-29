'use strict';
module.exports = (sequelize, DataTypes) => {
  const log2 = sequelize.define('log2', {
    teacher_id: DataTypes.INTEGER,
    student_lname: DataTypes.STRING,
    student_fname: DataTypes.STRING,
    intervention_type: DataTypes.STRING,
    intervention_date: DataTypes.DATE,
    follow_up_date: DataTypes.DATE,
    notes: DataTypes.STRING,
    point_of_contact: DataTypes.STRING,
    teacher_lname: DataTypes.STRING,
    teacher_fname: DataTypes.STRING,
    name_of_contact: DataTypes.STRING,
    student_id: DataTypes.INTEGER
  }, {});
  log2.associate = function(models) {
    // associations can be defined here
  };
  return log2;
};