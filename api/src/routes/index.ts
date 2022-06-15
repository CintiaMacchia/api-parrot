import { UsuarioController } from "../domain/usuario/controllers/usuario.controller";
import { PostController } from "../domain/post/controller/post.controller";

const express = require("express");
const routes = express.Router();

routes.post("/usuarios", UsuarioController.createUser)
routes.get("/usuarios", UsuarioController.getAllUsers)
routes.get("/usuarios:id", UsuarioController.getOneUser)
routes.put("/usuarios:id", UsuarioController.updateUser)
routes.delete("/usuarios:id", UsuarioController.deleteUser)

routes.post("/posts", PostController.createPost)
routes.get("/posts", PostController.getAllPosts)
routes.delete("/posts:id", PostController.deletePost)