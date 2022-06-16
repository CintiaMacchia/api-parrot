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
const Posts = require('../models');
exports.PostController = {
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id, content } = req.body;
                if (!user_id || !content)
                    return res.status(400).json({
                        message: 'Id de usuário e conteúdo são obrigatórios!'
                    });
                const newPost = yield Posts.create({
                    user_id,
                    content
                });
                res.json(newPost);
            }
            catch (error) {
                console.error(error);
                res.json('Não foi possível publicar');
            }
        });
    },
    deletePostByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, user_id } = req.params;
                const existIdPost = yield Posts.count({
                    where: {
                        user_id: user_id,
                        id: id
                    }
                });
                if (!existIdPost) {
                    return res.status(400).json('Post não encontrado');
                }
                yield Posts.destroy({
                    where: {
                        id: id
                    }
                });
                res.status(201).json('Post deletado com sucesso');
            }
            catch (error) {
                res.json('Não foi possível deletar o Post');
                console.error(error);
            }
        });
    },
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listPosts = yield Posts.findAll();
                res.status(201).json(listPosts);
            }
            catch (error) {
                res.json('Falha ao listar os posts');
                console.error(error);
            }
        });
    },
    getAllPostsFromOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const listPosts = yield Posts.findAll({
                    where: {
                        user_id: id
                    }
                });
                if (listPosts.length === 0) {
                    return res.status(400).json('Usuario ainda nao fez posts');
                }
                res.status(201).json(listPosts);
            }
            catch (error) {
                res.json('Falha ao listar os posts');
                console.error(error);
            }
        });
    },
};
