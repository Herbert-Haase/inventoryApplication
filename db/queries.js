const pool = require("./pool");

// pokemon
async function getAllPokemons() {
  const { rows } = await pool.query("SELECT * FROM pokemons");
  return rows;
}

// types
async function getAllTypes() {
  const { rows } = await pool.query("SELECT * FROM types");
  return rows;
}

// trainers
async function getAllTrainers() {
  const { rows } = await pool.query("SELECT * FROM trainer");
  return rows;
}

module.exports = {
  getAllPokemons,
  getAllTypes,
  getAllTrainers,
};
