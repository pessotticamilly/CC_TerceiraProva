const router = require("express").Router();

const cadastrarUsuarioHandler = require("./cadastrarUsuario.handler");

router.get("/", async (req, res) => {
    res.json("Cadastrar usuário funciona!");
});

router.post("/", async (req, res) => {
    const usuario = req.body;
    res.json(await cadastrarUsuarioHandler.cadastrarUsuario(usuario));
});

module.exports = router;