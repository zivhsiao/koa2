'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Products = sequelize.define('products', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    new_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    enabled: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    create_date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    pv: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "浏览数"
    }
});

Products.sync(); //创建表

module.exports = Products;
