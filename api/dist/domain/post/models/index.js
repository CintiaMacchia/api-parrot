'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class Posts extends Model {

    static associate({Users}) {
        // console.log(Users);
        // define association here
        Posts.belongsTo(Users, { foreignKey: 'user_id', as: 'posts' })
    }

    static initialize(sequelize, DataTypes) {
        Posts.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            content: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            }
        }, {
            sequelize,
            tableName: 'posts',
            modelName: 'Posts'
        });
    }
}



// Posts.associate(Users)

// console.log(Posts === sequelize.models.Posts); // true


module.exports = Posts;

