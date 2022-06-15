//import { Usuarios } from "../../../models/";
import bcrypt from "bcryptjs"

export class UsuarioService {

    async registerUsuario(data: any) {
        const { nome, senha, email, endereco } = data;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuarios.create({
            ...data,
            nome,
            senha: newSenha,
            email,
            endereco
        });

        return newUsuario
    }

}

