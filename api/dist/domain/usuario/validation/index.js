"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersValidation = void 0;
const create_1 = require("./usuarios/create");
const update_1 = require("./usuarios/update");
const getOne_1 = require("./usuarios/getOne");
const destroy_1 = require("./usuarios/destroy");
exports.usersValidation = {
    create: create_1.create,
    update: update_1.update,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
};
