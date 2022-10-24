let { listaUsuarios } = require("../cadastrarUsuario/cadastrarUsuario.handler");

async function login(usuario) {
    for (let usuarioFor of listaUsuarios) {
        if (usuario.usuario != usuarioFor.usuario && usuario.senha != usuarioFor.senha) {
            return "Login inválido!"
        }
    }

    return "Login válido!";
};

module.exports = {
    login
};