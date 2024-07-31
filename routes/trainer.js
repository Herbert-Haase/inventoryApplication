const { Router } = require("express");
const { trainersGet, trainerGet } = require("../controllers/allController");
const router = Router();

router.get("/", trainersGet);
router.get("/:id", trainerGet);

module.exports = router;
