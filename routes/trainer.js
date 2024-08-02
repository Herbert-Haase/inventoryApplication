const { Router } = require("express");
const {
  trainersGet,
  trainerGet,
  trainerCreateGet,
  trainerCreatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", trainersGet);
router.get("/create", trainerCreateGet);
router.post("/create", trainerCreatePost);
router.get("/:id", trainerGet);

module.exports = router;
