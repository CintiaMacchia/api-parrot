'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

//alterando
function initializeModels(db) {
    
    const Users  = require('../../../domain/usuario/models')
    const users = Users.initialize(db, Sequelize.DataTypes);
    db["users"] = users;
    
    const Posts  = require('../../../domain/post/models')
    const posts = Posts.initialize(db, Sequelize.DataTypes);
    db["posts"] = posts;
    
    Object.keys(db.models).forEach(modelName => {
        // console.log(db.models);
        if (db.models[modelName].associate) {
            db.models[modelName].associate(db.models);
        }
    });
}

module.exports = initializeModels;
//fim alteracao

// fs
//     .readdirSync(__dirname)
//     .filter(file => {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(file => {
//         const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//         db[model.name] = model;
//     });


// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
