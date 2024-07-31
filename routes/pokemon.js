const { Router } = require("express");
const {
  pokemonsGet,
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", pokemonsGet);
router.get("/create", pokemonCreateGet);
router.post("/create", pokemonCreatePost);
router.get("/:id", pokemonGet);

module.exports = router;
