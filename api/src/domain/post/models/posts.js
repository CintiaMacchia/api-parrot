'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../../../infrastructure/database');
class Posts extends Model {
    static associate(models) {
        // define association here
        Users.hasMany(models.Posts, { foreignKey: 'user_id', as: 'id' })
    }
}

Posts.init({
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Posts'
});

console.log(Posts === sequelize.models.Posts); // true

module.exports = Posts