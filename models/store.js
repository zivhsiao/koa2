'use strict';
const sequelize = require('./sequelize');
const Sequelize = require('sequelize');

const Store = sequelize.define('store', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    topic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    support: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "点赞数"
    }
});

// create tables
Store.sync(); //创建表

module.exports = Store;
