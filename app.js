const express = require("express");
const app = express();

// modules
require("dotenv").config();
const controller = require("./controllers/allController");
const pokemonRouter = require("./routes/pokemon");

// settings
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/pokemon", pokemonRouter);
app.get("/", controller.pokemonsTrainersTypesGet);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express app listening on localhost:" + PORT);
});
