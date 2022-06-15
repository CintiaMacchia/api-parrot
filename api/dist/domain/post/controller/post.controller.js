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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
exports.PostController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { texto } = req.params;
                const newPost = yield yield Posts.create(Object.assign(Object.assign({}, req.params), { texto }));
                return res.status(201).json(newPost);
            }
            catch (error) {
                return res.status(500).json("Nao foi possivel criar o Post!");
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield Posts.destroy({
                    where: {
                        id,
                    },
                });
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Nao foi possivel deletar o Post!");
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Posts.findAll();
                return res.json(usuarios);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Algo deu errado ao tentar listar os Posts!");
            }
        });
    },
    getAllByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield Usuarios.findByPk(id);
                const posts = yield Posts.getall();
                return res.json(posts);
            }
            catch (error) {
                return res.status(500).json("Algo errado aconteceu ao tentar listar os Posts desse Usuario!");
            }
        });
    },
};
