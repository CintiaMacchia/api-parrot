require('dotenv').config()

const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};

let db = {};

const initializeModels = require('./model')

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    
    console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco dados conectado!");
        initializeModels(db)
    } catch (error) {
        console.log(error)
        console.error("Erro ao tentar se conectar ao banco de dados!");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;