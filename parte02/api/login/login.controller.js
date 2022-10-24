const router = require("express").Router();

const loginHandler = require("./login.handler");

router.get("/", async (req, res) => {
    res.json("Login funciona!");
});

router.post("/", async (req, res) => {
    const usuario = req.body;
    res.json(await loginHandler.login(usuario));
});

module.exports = router;