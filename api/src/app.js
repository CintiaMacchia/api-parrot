const express = require('express');
// const routes = require('../dist/routes');
const db = require('./infrastructure/database');
// const handleError = require('../dist/middlewares/handleError')

const app = express();

db.hasConnection();
app.use(express.json())
// app.use(routes);
// app.use(handleError);

app.listen(6000, () => console.log('Servidor no ar!'))