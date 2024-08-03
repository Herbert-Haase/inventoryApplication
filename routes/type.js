const { Router } = require("express");
const {
  typesGet,
  typeGet,
  typeCreateGet,
  typeCreatePost,
  typeDelete,
  typeUpdateGet,
  typeUpdatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", typesGet);
router.post("/delete", typeDelete);
router.get("/create", typeCreateGet);
router.post("/create", typeCreatePost);
router.get("/:id", typeGet);
router.get("/:id/update", typeUpdateGet);
router.post("/update", typeUpdatePost);

module.exports = router;
