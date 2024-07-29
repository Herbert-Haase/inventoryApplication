const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

exports.pokemonsTrainersTypesGet = asyncHandler(async (req, res) => {
  const trainers = await db.getAllTrainers();
  const pokemons = await db.getAllPokemons();
  const types = await db.getAllTypes();

  res.render("all", { trainers: trainers, pokemons: pokemons, types: types });
});

exports.pokemonsGet = asyncHandler(async (req, res) => {
  const pokemons = await db.getAllPokemons();

  res.render("allPokemons", { pokemons: pokemons });
});
