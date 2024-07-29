const { Router } = require("express");
const { pokemonsGet } = require("../controllers/allController");
const router = Router();

router.get("/", pokemonsGet);

module.exports = router;
