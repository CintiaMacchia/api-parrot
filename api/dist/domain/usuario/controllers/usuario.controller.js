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
exports.UsuarioController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models = require('../models');
const Users = require("../models");
exports.UsuarioController = {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(Users);
                const { nome, email, password, apto } = req.body;
                if (!nome || !email || !password || !apto)
                    return res.status(400).json({
                        message: 'Todas as informações são obrigatórias!'
                    });
                const newPassword = bcryptjs_1.default.hashSync(password, 10);
                // console.log(nome);
                const newUser = yield Users.create({
                    nome,
                    email,
                    password: newPassword,
                    apto,
                });
                // const jane = await User.create({ name: "Jane" })
                res.json(newUser);
            }
            catch (error) {
                res.json('Não foi possível cadastrar o usuário');
                console.error(error);
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, email, apto, password } = req.body;
                const existId = yield Users.count({
                    where: {
                        user_id: id
                    }
                });
                if (!existId) {
                    return res.status(400).json('Usuário não encontrado');
                }
                const updatedUser = yield Users.update({ nome, email, apto, password }, {
                    where: {
                        user_id: id,
                    }
                });
                res.json(updatedUser);
                res.status(201).json('Dados atualizados com sucesso');
            }
            catch (error) {
                res.status(404).json('Verfique os dados e tente novamente');
                console.error(error);
            }
            ;
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const existIdUser = yield Users.count({
                    where: {
                        user_id: id
                    }
                });
                if (!existIdUser) {
                    return res.status(400).json('Usuário não encontrado');
                }
                yield Users.destroy({
                    where: {
                        user_id: id
                    }
                });
                res.status(201).json('Usuário deletado com sucesso');
            }
            catch (error) {
                res.json('Falha ao deletar usuário');
                console.error(error);
            }
        });
    },
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaUsuarios = yield Users.findAll();
                return res.status(201).json(listaUsuarios);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Algo deu errado ao tentar listar os Usuarios!");
            }
        });
    },
    getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield Users.findByPk(id);
                return res.json(usuario);
            }
            catch (error) {
                return res.status(500).json("Algo errado aconteceu ao tentar listar este Usuario!");
            }
        });
    },
};
