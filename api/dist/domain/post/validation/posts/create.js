"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validation_1 = require("express-validation");
exports.create = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        user_id: express_validation_1.Joi.number(),
        content: express_validation_1.Joi.string().max(200).required(),
    }),
});
