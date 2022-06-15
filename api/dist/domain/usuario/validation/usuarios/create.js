"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validation_1 = require("express-validation");
exports.create = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().max(70).required(),
        email: express_validation_1.Joi.string().max(70).required(),
        apartment: express_validation_1.Joi.string().required(),
        password: express_validation_1.Joi.string().max(120).required(),
    }),
});
