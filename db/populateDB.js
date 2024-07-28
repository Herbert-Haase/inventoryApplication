#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

// tables trainer, types, pokemon
const SQL = `
CREATE TABLE IF NOT EXISTS types (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR (15)
);

CREATE TABLE IF NOT EXISTS trainer (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (15)
);

CREATE TABLE IF NOT EXISTS pokemons (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (15),
  trainer_id INT,
  type_id INT,
  CONSTRAINT fk_trainer FOREIGN KEY(trainer_id)
    REFERENCES trainer(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_type FOREIGN KEY(type_id)
    REFERENCES types(id)
    ON DELETE CASCADE
);

INSERT INTO types (type) 
VALUES ('fire');

INSERT INTO trainer (name)
VALUES ('Ash');

INSERT INTO pokemons (name, trainer_id, type_id)
VALUES ('pikachu', 1, 1);
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
