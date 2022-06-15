import { UsuarioController } from "../domain/usuario/controllers/usuario.controller";

const express = require("express");
const routes = express.Router();

routes.post("/usuarios", UsuarioController.create)
routes.get("/usuarios", UsuarioController.getAll)
routes.get("/usuarios:id", UsuarioController.getOne)
routes.put("/usuarios:id", UsuarioController.update)
routes.delete("/usuarios:id", UsuarioController.delete)

routes.post("/posts", UsuarioController.create)
routes.get("/posts", UsuarioController.getAll)
routes.get("/posts:id", UsuarioController.getOne)
routes.delete("/posts:id", UsuarioController.delete)