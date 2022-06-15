import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const { Users } = require("../models")

export const UsuarioController = {
  async createUser(req: Request, res: Response) {
    try {
      const { nome, email, password, apto} = req.body;

      if (!nome || !email || !password || !apto)
        return res.status(400).json({
          message: 'Todas as informações são obrigatórias!'
        })
      const newPassword = bcrypt.hashSync(password, 10)
      const newUser = await Users.create({
        nome,
        email,
        password: newPassword,
        apto,
      });

      res.json(newUser);
    } 
    
    catch (error) {
      res.json('Não foi possível cadastrar o usuário');
      console.error(error);
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, email, apto, password} = req.body;

      const existId = await Users.count({
        where: {
          user_id: id
        }
      });

      if (!existId) {
        return res.status(400).json('Usuário não encontrado');
      }

      const updatedUser = await Users.update({ nome, email, apto, password}, {
        where: {
          user_id: id,
        }
      });

      res.json(updatedUser)
      res.status(201).json('Dados atualizados com sucesso');
    } 

    catch (error) {
      res.status(404).json('Verfique os dados e tente novamente');
      console.error(error);
    };
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const existIdUser = await Users.count({
        where: {
          user_id: id
        }
      });

      if (!existIdUser) {
        return res.status(400).json('Usuário não encontrado');
      }

      await Users.destroy({
        where: {
          user_id: id
        }
      });

      res.status(201).json('Usuário deletado com sucesso');
    } 

    catch (error) {
      res.json('Falha ao deletar usuário')
      console.error(error);
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const listaUsuarios = await Users.findAll();
      return res.status(201).json(listaUsuarios);
    } 
    catch (error) {
      console.log(error);
      return res.status(500).json("Algo deu errado ao tentar listar os Usuarios!");
    }
  },

  async getOneUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usuario = await Users.findByPk(id);

      return res.json(usuario);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu ao tentar listar este Usuario!");
    }
  },
};
