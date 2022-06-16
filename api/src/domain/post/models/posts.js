'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Posts extends Model {
        static associate(models) {
            // define association here
            Users.hasMany(models.Posts, { foreignKey: 'user_id' })
        }
    }
    Posts.init({
        id: DataTypes.INTEGER,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Posts',
    });
    return Posts;
};