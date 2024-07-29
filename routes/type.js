const { Router } = require("express");
const { typesGet } = require("../controllers/allController");
const router = Router();

router.get("/", typesGet);

module.exports = router;
