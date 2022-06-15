"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
module.exports = (0, express_jwt_1.expressjwt)({
    secret: 'secret',
    algorithms: ['HS256'],
});
