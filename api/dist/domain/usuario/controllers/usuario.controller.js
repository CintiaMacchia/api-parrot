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
const services_1 = require("../services");
exports.UsuarioController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUsuario = yield services_1.usuarioService.registerUsuario(req.body);
                return res.status(201).json(newUsuario);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome } = req.body;
                const { senha } = req.body;
                const { email } = req.body;
                const { endereco } = req.body;
                const usuarioUpdate = {};
                Object.assign(usuarioUpdate, req.body);
                if (senha) {
                    const newSenha = bcryptjs_1.default.hashSync(senha, 10);
                    Object.assign(usuarioUpdate, { senha: newSenha });
                }
                yield Usuarios.update(usuarioUpdate, {
                    where: { id },
                });
                const usuario = yield Usuarios.findByPk(id);
                return res.status(200).json(usuario);
            }
            catch (error) {
                return res.status(500).json("Nao foi possivel atualizar os dados do Usuario!");
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield Usuarios.destroy({
                    where: {
                        id,
                    },
                });
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Nao foi possivel deletar o Usario!");
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Usuarios.findAll();
                return res.json(usuarios);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Algo deu errado ao tentar listar os Usuarios!");
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield Usuarios.findByPk(id);
                return res.json(usuario);
            }
            catch (error) {
                return res.status(500).json("Algo errado aconteceu ao tentar listar este Usuario!");
            }
        });
    },
};
