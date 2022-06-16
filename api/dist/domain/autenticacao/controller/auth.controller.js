"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Users = require('../../usuario/models');
const secret = require('../../../config/secret');
exports.authController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password)
                    return res
                        .status(400)
                        .json({ message: 'Todas as informções são obrigatórias!' });
                const logUser = yield Users.findOne({ where: { email } });
                if (!logUser) {
                    return res
                        .status(401)
                        .json({ message: 'Usuário ou senha inválidos!!' });
                }
                if (!bcryptjs_1.default.compareSync(password, logUser.password)) {
                    return res
                        .status(401)
                        .json({ message: 'Usuário ou senha inválidos!!' });
                }
                const token = jsonwebtoken_1.default.sign({
                    id: logUser.id,
                    email: logUser.email,
                    admin: logUser.admin,
                }, secret.key);
                res.cookie('autenticacao', token);
                return res.status(200).json(token);
            }
            catch (error) {
                return res
                    .status(500)
                    .json('Ocorreu algum erro. Entre em contato com o administrador do sistema');
            }
        });
    },
};
