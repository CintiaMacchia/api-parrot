// import { Posts } from ""; 
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const PostController = {
    async create(req: Request, res: Response) {
        try {
            const { texto } = req.params;

            const newPost = await await Posts.create({
                ...req.params,
                texto,
            });

            return res.status(201).json(newPost);
        } catch (error) {
            return res.status(500).json("Nao foi possivel criar o Post!");
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await Posts.destroy({
                where: {
                    id,
                },
            });

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json("Nao foi possivel deletar o Post!");
        }
    },
    async getAll(req: Request, res: Response) {
        try {
            const usuarios = await Posts.findAll();

            return res.json(usuarios);
        } catch (error) {
            console.log(error);
            return res.status(500).json("Algo deu errado ao tentar listar os Posts!");
        }
    },

    async getAllByUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await Usuarios.findByPk(id);
            const posts = await Posts.getall();

            return res.json(posts);
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu ao tentar listar os Posts desse Usuario!");
        }
    },
};
