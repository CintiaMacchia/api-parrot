require('dotenv').config()

const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = "";
const DB_CONFIG = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco dados conectado!");
    } catch (error) {
        console.log(error)
        console.error("Erro ao tentar se conectar ao banco de dados1");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;