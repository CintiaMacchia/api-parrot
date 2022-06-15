import { expressjwt } from 'express-jwt';

module.exports = expressjwt({
  secret: 'secret',
  algorithms: ['HS256'],
});
