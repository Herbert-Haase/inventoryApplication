const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

// pokemon
exports.pokemonCreateGet = asyncHandler(async (req, res) => {
  const trainers = await db.getAllTrainers();
  const types = await db.getAllTypes();

  res.render("createPokemon", { trainers: trainers, types: types });
});
exports.pokemonCreatePost = asyncHandler(async (req, res) => {
  await db.createPokemon(
    req.body.pokemonName,
    req.body.TrainerID,
    req.body.TypeID
  );
  res.redirect("/");
});
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

exports.pokemonGet = asyncHandler(async (req, res) => {
  const pokemon = await db.getPokemon(req.params.id);

  res.render("specificPokemon", { pokemon: pokemon });
});

exports.pokemonDelete = asyncHandler(async (req, res) => {
  const { id } = req.body;
  await db.deletePokemon(id);
  res.redirect("/");
});

// type
exports.typesGet = asyncHandler(async (req, res) => {
  const types = await db.getAllTypes();

  for (let type of types) {
    type.pokemons = [];
    const pokemons = await db.getAllPokemonsOfAType(type.type_name);
    type.pokemons.push(...pokemons);
  }

  res.render("allTypes", {
    types: types,
  });
});

exports.typeGet = asyncHandler(async (req, res) => {
  const type = await db.getType(req.params.id);

  res.render("specificType", { type: type });
});

exports.typeCreatePost = asyncHandler(async (req, res) => {
  await db.createType(req.body.typeName);
  res.redirect("/");
});

exports.typeCreateGet = asyncHandler(async (req, res) => {
  res.render("createType");
});

// trainer
exports.trainersGet = asyncHandler(async (req, res) => {
  const trainers = await db.getAllTrainers();

  for (let trainer of trainers) {
    trainer.pokemons = [];
    const pokemons = await db.getAllPokemonsOfATrainer(trainer.trainer_name);
    trainer.pokemons.push(...pokemons);
  }

  res.render("allTrainers", {
    trainers: trainers,
  });
});

exports.trainerGet = asyncHandler(async (req, res) => {
  const trainer = await db.getTrainer(req.params.id);

  res.render("specificTrainer", { trainer: trainer });
});

exports.trainerCreatePost = asyncHandler(async (req, res) => {
  await db.createTrainer(req.body.trainerName);
  res.redirect("/");
});

exports.trainerCreateGet = asyncHandler(async (req, res) => {
  res.render("createTrainer");
});

// all
exports.deletePost = asyncHandler(async (req, res) => {
  await db.deleteAll();
  console.log("All records have been deleted");
  res.redirect("/");
});
