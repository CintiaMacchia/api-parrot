"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
function default_1(err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
}
exports.default = default_1;
