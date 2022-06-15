const express = require('express');
const db = require('./infrastructure/database');
//const routes = require('../dist/routes');
//const handleError = require('../dist/middlewares/handleError')

const app = express();

app.use(express.json());
db.hasConnection();
//app.use(routes);
//app.use(handleError);

app.listen(3000, () => console.log('Servidor no ar!'))