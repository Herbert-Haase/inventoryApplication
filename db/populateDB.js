#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

// tables trainers, types, pokemon
const SQL = `
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

INSERT INTO types (type_name) 
VALUES ('fire');

INSERT INTO trainers (trainer_name)
VALUES ('Ash');

INSERT INTO pokemons (pokemon_name, trainer_id, type_id)
VALUES ('pikachu', 1, 1), ('glumanda', 1, 1);
`;

async function main() {
  console.log("seeding...");
  const client = new Client(argv[2]);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
