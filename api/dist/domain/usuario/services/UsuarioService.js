"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
//import { Usuarios } from "../../../models/";
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioService {
    registerUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, senha, email, endereco } = data;
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            const newUsuario = yield Usuarios.create(Object.assign(Object.assign({}, data), { nome, senha: newSenha, email,
                endereco }));
            return newUsuario;
        });
    }
}
exports.UsuarioService = UsuarioService;
