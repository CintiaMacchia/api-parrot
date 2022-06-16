import { UsuarioController } from "../domain/usuario/controllers/usuario.controller";
import { PostController } from "../domain/post/controller/post.controller";
import { authController } from "../domain/autenticacao/controller/auth.controller";
import { loginValidation } from "../domain/autenticacao/validation/authLogin";

const auth = require('../middlewares/auth');
const express = require('express');
const routes = express.Router();

routes.post('/usuarios', UsuarioController.createUser);
routes.get('/usuarios', UsuarioController.getAllUsers);
routes.get('/usuarios/:id', UsuarioController.getOneUser);
routes.put('/usuarios/:id', UsuarioController.updateUser);
routes.delete('/usuarios/:id', UsuarioController.deleteUser);

routes.post("/posts", PostController.createPost)
routes.get("/posts", PostController.getAllPosts)
routes.get("/posts/:id", PostController.getAllPostsFromOneUser)
routes.delete("/posts/:id/:user_id", PostController.deletePostByUser)

routes.post("/auth", authController.login)


routes.post('/login', loginValidation, auth, authController.login);

module.exports = routes;
