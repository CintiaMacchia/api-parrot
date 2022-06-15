// import { Usuarios } from "../models/usuarios"; 
import { Request, Response} from "express";
import bcrypt from "bcryptjs";
import { usuarioService } from "../services";

export const UsuarioController = {
    async create(req: Request, res: Response) {
      try {
        const newUsuario = await usuarioService.registerUsuario(req.body);
        
        return res.status(201).json(newUsuario);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
  
    async update(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const { nome } = req.body;
        const { senha } = req.body;
        const { email } = req.body;
        const { endereco } = req.body;
        const usuarioUpdate = {};
  
        Object.assign(usuarioUpdate, req.body);
  
        if (senha) {
          const newSenha = bcrypt.hashSync(senha, 10);
          Object.assign(usuarioUpdate, { senha: newSenha });
        }
  
        await Usuarios.update(usuarioUpdate, {
          where: { id },
        });
  
        const usuario = await Usuarios.findByPk(id);
  
        return res.status(200).json(usuario);
      } catch (error) {
        return res.status(500).json("Nao foi possivel atualizar os dados do Usuario!");
      }
    },
    async delete(req: Request, res: Response) {
      try {
        const { id } = req.params;
          
        await Usuarios.destroy({
          where: {
            id,
          },
        });
  
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json("Nao foi possivel deletar o Usario!");
      }
    },
    async getAll(req: Request, res: Response) {
      try {
        const usuarios = await Usuarios.findAll();
  
        return res.json(usuarios);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Algo deu errado ao tentar listar os Usuarios!");
      }
    },
  
    async getOne(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const usuario = await Usuarios.findByPk(id);
  
        return res.json(usuario);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu ao tentar listar este Usuario!");
      }
    },
  };
  