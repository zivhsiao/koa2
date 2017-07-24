'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Course_register = sequelize.define('course_register', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    join_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    create_date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

Course_register.sync(); //创建表

module.exports = Course_register;
