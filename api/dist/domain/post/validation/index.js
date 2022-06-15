"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidation = void 0;
const create_1 = require("./posts/create");
const update_1 = require("./posts/update");
const getOne_1 = require("./posts/getOne");
const destroy_1 = require("./posts/destroy");
exports.postValidation = {
    create: create_1.create,
    update: update_1.update,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
};
