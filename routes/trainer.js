const { Router } = require("express");
const {
  trainersGet,
  trainerGet,
  trainerCreateGet,
  trainerCreatePost,
  trainerDelete,
  trainerUpdateGet,
  trainerUpdatePost,
} = require("../controllers/allController");
const router = Router();

router.get("/", trainersGet);
router.post("/delete", trainerDelete);
router.get("/create", trainerCreateGet);
router.post("/create", trainerCreatePost);
router.get("/:id", trainerGet);
router.get("/:id/update", trainerUpdateGet);
router.post("/update", trainerUpdatePost);

module.exports = router;
