let { listaUsuarios } = require("../cadastrarUsuario/cadastrarUsuario.handler");

async function login(usuario) {
    
    if(!listaUsuarios.find(user => user.usuario == usuario.usuario && user.senha == usuario.senha)){
        return "Usuário ou senha incorretos";
    }

    return "Login válido!";
};

module.exports = {
    login
};