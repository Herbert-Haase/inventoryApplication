const express = require("express");
const app = express();

// modules
require("dotenv").config();
const controller = require("./controllers/allController");
const pokemonRouter = require("./routes/pokemon");
const typeRouter = require("./routes/type");
const trainerRouter = require("./routes/trainer");

// settings
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/pokemon", pokemonRouter);
app.use("/type", typeRouter);
app.use("/trainer", trainerRouter);
app.get("/", controller.pokemonsTrainersTypesGet);
app.post("/", controller.deletePost);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express app listening on localhost:" + PORT);
});
