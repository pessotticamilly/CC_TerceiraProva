const router = require("express").Router();

const cadastrarUsuario = require("./api/cadastrarUsuario/cadastrarUsuario.controller");
const listarUsuarios = require("./api/listarUsuarios/listarUsuarios.controller");
const login = require("./api/login/login.controller");

router.use("/cadastrar_usuario", cadastrarUsuario);
router.use("/listar_usuarios", listarUsuarios);
router.use("/login", login);

module.exports = router;