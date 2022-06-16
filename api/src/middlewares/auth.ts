import { expressjwt } from 'express-jwt';
const secret = require('../config/secret')


module.exports = expressjwt({
  secret: secret.key,
  algorithms: ['HS256'],
});
