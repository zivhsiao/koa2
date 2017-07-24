'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Category = sequelize.define('category', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    enabled: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    },
    create_date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

Category.sync(); //创建表

module.exports = Category;
