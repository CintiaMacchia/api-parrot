"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_controller_1 = require("../domain/usuario/controllers/usuario.controller");
const post_controller_1 = require("../domain/post/controller/post.controller");
const auth_controller_1 = require("../domain/autenticacao/controller/auth.controller");
const authLogin_1 = require("../domain/autenticacao/validation/authLogin");
const auth = require('../middlewares/auth');
const express = require('express');
const routes = express.Router();
routes.post('/usuarios', usuario_controller_1.UsuarioController.createUser);
routes.get('/usuarios', usuario_controller_1.UsuarioController.getAllUsers);
routes.get('/usuarios/:id', usuario_controller_1.UsuarioController.getOneUser);
routes.put('/usuarios/:id', usuario_controller_1.UsuarioController.updateUser);
routes.delete('/usuarios/:id', usuario_controller_1.UsuarioController.deleteUser);
routes.post("/posts", post_controller_1.PostController.createPost);
routes.get("/posts", post_controller_1.PostController.getAllPosts);
routes.get("/posts/:id", post_controller_1.PostController.getAllPostsFromOneUser);
routes.delete("/posts/:id/:user_id", post_controller_1.PostController.deletePostByUser);
routes.post("/auth", auth_controller_1.authController.login);
routes.post('/login', authLogin_1.loginValidation, auth, auth_controller_1.authController.login);
module.exports = routes;
