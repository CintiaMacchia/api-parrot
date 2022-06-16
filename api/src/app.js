const express = require('express');
const db = require('./infrastructure/database');
const handleError = require('./middlewares/handleError')
const routes = require('./routes');

const app = express();

db.hasConnection();

app.use(express.json())
app.use(routes);
app.use(handleError);

app.listen(6000, () => console.log('Servidor no ar!'))