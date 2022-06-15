"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const db = require('../src/infrastructure/database');
const app = (0, express_1.default)();
const routes = require("./routes");
app.use(express_1.default.json());
db.hasConnection();
app.use(routes);
app.use(handleError_1.default);
exports.default = app;
