"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const express_validation_1 = require("express-validation");
exports.update = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().max(70).required(),
        email: express_validation_1.Joi.string().email().max(70).required(),
        apartment: express_validation_1.Joi.number().required(),
        password: express_validation_1.Joi.string().max(120).required(),
    }),
});
