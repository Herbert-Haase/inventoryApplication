const { Router } = require("express");
const {
  pokemonsGet,
  pokemonGet,
  pokemonCreateGet,
  pokemonCreatePost,
  pokemonDelete,
  pokemonUpdateGet,
  pokemonUpdatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", pokemonsGet);
router.post("/delete", pokemonDelete);
router.get("/create", pokemonCreateGet);
router.post("/create", pokemonCreatePost);
router.get("/:id", pokemonGet);
router.get("/:id/update", pokemonUpdateGet);
router.post("/update", pokemonUpdatePost);

module.exports = router;
