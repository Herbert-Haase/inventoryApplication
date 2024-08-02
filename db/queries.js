const pool = require("./pool");

// pokemon
async function getAllPokemons() {
  const { rows } = await pool.query("SELECT * FROM pokemons");
  return rows;
}

async function getAllPokemonsOfAType(type) {
  const { rows } = await pool.query(
    `
    SELECT * FROM pokemons
    JOIN types
    ON types.id = pokemons.type_id AND types.type_name = $1`,
    [type]
  );
  return rows;
}

async function getPokemon(id) {
  const { rows } = await pool.query("SELECT * FROM pokemons WHERE id=$1", [id]);
  return rows;
}

async function createPokemon(pokemon_name, trainer_id, type_id) {
  await pool.query(
    "INSERT INTO pokemons (pokemon_name, trainer_id, type_id) VALUES ($1, $2, $3)",
    [pokemon_name, trainer_id, type_id]
  );
}

async function deletePokemon(id) {
  await pool.query("DELETE FROM pokemons WHERE id = $1", [id]);
}

// types
async function getAllTypes() {
  const { rows } = await pool.query("SELECT * FROM types");
  return rows;
}

async function getType(id) {
  const { rows } = await pool.query("SELECT * FROM types WHERE id=$1", [id]);
  return rows;
}

async function createType(type_name) {
  await pool.query("INSERT INTO types (type_name) VALUES ($1)", [type_name]);
}

async function deleteType(id) {
  await pool.query("DELETE FROM types WHERE id = $1", [id]);
}

// trainers
async function getAllTrainers() {
  const { rows } = await pool.query("SELECT * FROM trainers");
  return rows;
}

async function getTrainer(id) {
  const { rows } = await pool.query("SELECT * FROM trainers WHERE id=$1", [id]);
  return rows;
}

async function getAllPokemonsOfATrainer(type) {
  const { rows } = await pool.query(
    `
    SELECT * FROM pokemons
    JOIN trainers
    ON trainers.id = pokemons.type_id AND trainers.trainer_name = $1`,
    [type]
  );
  return rows;
}

async function createTrainer(trainer_name) {
  await pool.query("INSERT INTO trainers (trainer_name) VALUES ($1)", [
    trainer_name,
  ]);
}

async function deleteTrainer(id) {
  await pool.query("DELETE FROM trainers WHERE id = $1", [id]);
}

// all
async function deleteAll() {
  await pool.query(`
    DROP TABLE pokemons;
    DROP TABLE trainers;
    DROP TABLE types;

  CREATE TABLE IF NOT EXISTS types (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type_name VARCHAR (15)
  );

  CREATE TABLE IF NOT EXISTS trainers (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    trainer_name VARCHAR (15)
  );

  CREATE TABLE IF NOT EXISTS pokemons (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pokemon_name VARCHAR (15),
    trainer_id INT,
    type_id INT,
    CONSTRAINT fk_trainer FOREIGN KEY(trainer_id)
      REFERENCES trainers(id)
      ON DELETE CASCADE,
    CONSTRAINT fk_type FOREIGN KEY(type_id)
      REFERENCES types(id)
      ON DELETE CASCADE
  );
      `);
}

module.exports = {
  getAllPokemons,
  getAllTypes,
  getType,
  getAllTrainers,
  getTrainer,
  deleteAll,
  getAllPokemonsOfAType,
  getAllPokemonsOfATrainer,
  getPokemon,
  createPokemon,
  createType,
  createTrainer,
  deletePokemon,
  deleteTrainer,
  deleteType,
};
