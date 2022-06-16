"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const express_validation_1 = require("express-validation");
exports.loginValidation = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().email().max(70).required(),
        password: express_validation_1.Joi.string().max(120).required(),
    }),
});
