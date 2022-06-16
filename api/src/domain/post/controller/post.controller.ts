import { Request, Response } from "express";
const Posts = require('../models');

export const PostController = {
    async createPost(req: Request, res: Response) {
        try {
            const { user_id, content } = req.body;

            if (!user_id || !content)
                return res.status(400).json({
                    message: 'Id de usuário e conteúdo são obrigatórios!'
                })

            const newPost = await Posts.create({
                user_id,
                content
            });

            res.json(newPost);
        }

        catch (error) {
            console.error(error);
            res.json('Não foi possível publicar');

        }
    },

    async deletePostByUser(req: Request, res: Response) {
        try {
            const { id, user_id } = req.params;

            const existIdPost = await Posts.count({
                where: {
                    user_id: user_id,
                    id:id
                }
            });

            if (!existIdPost) {
                return res.status(400).json('Post não encontrado');
            }

            await Posts.destroy({
                where: {
                    id: id
                }
            });

            res.status(201).json('Post deletado com sucesso');
        }

        catch (error) {
            res.json('Não foi possível deletar o Post')
            console.error(error);
        }
    },

    async getAllPosts(req: Request, res: Response) {
        try {
            const listPosts = await Posts.findAll();
            res.status(201).json(listPosts);
        }

        catch (error) {
            res.json('Falha ao listar os posts');
            console.error(error)
        }
    },

    async getAllPostsFromOneUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
                        
            const listPosts = await Posts.findAll({
                where: {
                    user_id:id
                }
            });

            if (listPosts.length === 0) {
                return res.status(400).json('Usuario ainda nao fez posts');
            }
            res.status(201).json(listPosts);
        }

        catch (error) {
            res.json('Falha ao listar os posts');
            console.error(error)
        }
    },
};
