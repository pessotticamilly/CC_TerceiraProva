let { listaUsuarios } = require("../cadastrarUsuario/cadastrarUsuario.handler");

async function pegarUsuarios() {
    return listaUsuarios;
};

module.exports = {
    pegarUsuarios
};