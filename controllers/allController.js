const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

exports.pokemonsTrainersTypesGet = asyncHandler(async (req, res) => {
  const trainers = await db.getAllTrainers();
  const pokemons = await db.getAllPokemons();
  const types = await db.getAllTypes();
  res.send(
    "Trainer: " +
      trainers.map((trainer) => trainer.name).join(", ") +
      "\nPokemon: " +
      pokemons.map((pokemon) => pokemon.name).join(", ") +
      "\nType: " +
      types.map((type) => type.type).join(", ")
  );
});
