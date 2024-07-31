const { Router } = require("express");
const { typesGet, typeGet } = require("../controllers/allController");
const router = Router();

router.get("/", typesGet);
router.get("/:id", typeGet);

module.exports = router;
