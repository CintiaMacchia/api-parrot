const express = require('express');
const routes = require('../dist/routes/index');
const db = require('./infrastructure/database');
// const handleError = require('./middlewares/handleError')

const app = express();

db.hasConnection();
app.use(express.json())
app.use(routes);
// app.use(handleError);

app.listen(3000, () => console.log('Servidor no ar!'))