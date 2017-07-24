'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Order_detail = sequelize.define('order_detail', {
    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    count_detail: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Order_detail.sync(); //创建表

module.exports = Order_detail;
