let listaUsuarios = [
    { id: 1, usuario: "Camilly", email: "camilly@gmail.com", senha: 123 },
    { id: 2, usuario: "Leonardo", email: "leonardo@gmail.com", senha: 123 },
    { id: 3, usuario: "João", email: "joao@gmail.com", senha: 123 },
    { id: 4, usuario: "Kenzo", email: "kenzo@gmail.com", senha: 123 }
];

async function cadastrarUsuario(usuario){
    if(usuario.usuario == null || usuario.email == null || senha == null) {
        return "Erro ao cadastrar usuário!"
    }
    
    listaUsuarios.push(usuario);
    return "Usuário cadastrado com sucesso!";
};

module.exports = {
    listaUsuarios,
    cadastrarUsuario
};