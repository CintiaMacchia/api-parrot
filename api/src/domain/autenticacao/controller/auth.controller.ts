import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Users = require('../../usuario/models');
const secret = require('../../../config/secret');

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res
          .status(400)
          .json({ message: 'Todas as informções são obrigatórias!' });

      const logUser = await Users.findOne({ where: { email } });

      if (!logUser) {
        return res
          .status(401)
          .json({ message: 'Usuário ou senha inválidos!!' });
      }

      if (!bcrypt.compareSync(password, logUser.password)) {
        return res
          .status(401)
          .json({ message: 'Usuário ou senha inválidos!!' });
      }

      const token = jwt.sign(
        {
          id: logUser.id,
          email: logUser.email,
          admin: logUser.admin,
        },
        secret.key
      );

      res.cookie('autenticacao', token);
      return res.status(200).json(token);
    } catch (error) {
      return res
        .status(500)
        .json(
          'Ocorreu algum erro. Entre em contato com o administrador do sistema'
        );
    }
  },
};
