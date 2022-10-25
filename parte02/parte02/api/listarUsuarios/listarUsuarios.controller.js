const router = require("express").Router();
const listarUsuariosHandler = require("./listarUsuarios.handler");

router.get("/", async (req, res) => {
    res.json(await listarUsuariosHandler.pegarUsuarios());
});

module.exports = router;