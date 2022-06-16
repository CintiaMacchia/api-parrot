"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_controller_1 = require("../domain/usuario/controllers/usuario.controller");
const post_controller_1 = require("../domain/post/controller/post.controller");
const express = require("express");
const routes = express.Router();
routes.post("/usuarios", usuario_controller_1.UsuarioController.createUser);
routes.get("/usuarios", usuario_controller_1.UsuarioController.getAllUsers);
routes.get("/usuarios/:id", usuario_controller_1.UsuarioController.getOneUser);
routes.put("/usuarios/:id", usuario_controller_1.UsuarioController.updateUser);
routes.delete("/usuarios/:id", usuario_controller_1.UsuarioController.deleteUser);
routes.post("/posts", post_controller_1.PostController.createPost);
routes.get("/posts", post_controller_1.PostController.getAllPosts);
routes.delete("/posts/:id", post_controller_1.PostController.deletePost);
module.exports = routes;
