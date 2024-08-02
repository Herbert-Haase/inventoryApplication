const { Router } = require("express");
const {
  trainersGet,
  trainerGet,
  trainerCreateGet,
  trainerCreatePost,
  trainerDelete,
} = require("../controllers/allController");
const router = Router();

router.get("/", trainersGet);
router.post("/delete", trainerDelete);
router.get("/create", trainerCreateGet);
router.post("/create", trainerCreatePost);
router.get("/:id", trainerGet);

module.exports = router;
