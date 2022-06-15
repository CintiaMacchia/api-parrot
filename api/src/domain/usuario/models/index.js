// const { Model } = require('sequelize');

// module.exports = { Users: (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init({
//     id: DataTypes.INTEGER,
//     nome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     apto: DataTypes.INTEGER,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// }}


// const db = require ('../../../infrastructure/database/index')
// const { DataTypes } = require ('sequelize')

// const Users = db.define ('user', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nome: {
//         unique: true,
//         type: DataTypes.STRING
//     },
//     email: {
//         unique: true,
//         type: DataTypes.STRING
//     },
//     password: {
//         type: DataTypes.STRING  
//     },
//     apto: {
//         unique: true,
//         type: DataTypes.INTEGER
//     },
//     createdAt: {
//         type: DataTypes.DATE
//     },
//     updatedAt: {
//         type: DataTypes.DATE
//     }
// }, {
//     tableName: 'users'
// })

// module.exports = Users


const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Users extends Model { }

Users.init({
  // Model attributes are defined here
  id: DataTypes.INTEGER,
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  apto: DataTypes.INTEGER,
  password: DataTypes.STRING
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users' // We need to choose the model name
});

// the defined model is the class itself
console.log(Users === sequelize.models.Users); // true

module.exports = Users




