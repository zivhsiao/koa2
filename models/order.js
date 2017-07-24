'use strict';
const sequelize = require("./sequelize.js")
const Sequelize = require('sequelize')

const Order = sequelize.define('order', {
    products_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    create_date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    cancel_date:{
        type: Sequelize.DATE,
        allowNull: true
    }
});

Order.sync(); //创建表

module.exports = Order;
