'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class Users extends Model {

  static associate({Posts}) {
    // define association here
    Users.hasMany(Posts, { foreignKey: 'user_id', as: 'users' })
  }

  static initialize(sequelize, DataTypes) {
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
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      // Other model options go here
      sequelize,
      tableName: 'users',
      modelName: 'Users' // We need to choose the model name
    });
  }

}

// the defined model is the class itself
// console.log(Users === sequelize.models.Users); // true

// Users.associate(Posts)
module.exports = Users;