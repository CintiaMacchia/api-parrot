'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../../../infrastructure/database');
class Users extends Model {}

Users.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    apto: DataTypes.INTEGER,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    update: DataTypes.DATE
}, {
    // Other model options go here
    sequelize,
    modelName: 'Users' // We need to choose the model name
});
// the defined model is the class itself
console.log(Users === sequelize.models.Users); // true

module.exports = Users;