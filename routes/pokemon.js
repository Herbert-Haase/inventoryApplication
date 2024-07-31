const { Router } = require("express");
const { pokemonsGet, pokemonGet } = require("../controllers/allController");
const router = Router();

router.get("/", pokemonsGet);
router.get("/:id", pokemonGet);

module.exports = router;
