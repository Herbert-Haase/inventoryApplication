const { Router } = require("express");
const { trainersGet } = require("../controllers/allController");
const router = Router();

router.get("/", trainersGet);

module.exports = router;
