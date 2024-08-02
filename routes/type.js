const { Router } = require("express");
const {
  typesGet,
  typeGet,
  typeCreateGet,
  typeCreatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", typesGet);
router.get("/create", typeCreateGet);
router.post("/create", typeCreatePost);
router.get("/:id", typeGet);

module.exports = router;
