"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const express_validation_1 = require("express-validation");
exports.getOne = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
});
