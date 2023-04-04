const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

async function readPeople() {
  try {
    const res = await pool.query(`SELECT * FROM people ORDER BY id DESC`);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err?.stack);
  }
}


async function createPeople(people) {
  console.log(people);
  //let today = new Date();
  await pool.query(
    `INSERT INTO people(last_name, first_name, email) VALUES ($1, $2, $3)`,
    [
      people.last_name,
      people.first_name,
      people.email,
      //today.toISOString(),
    ]
  );
}

async function deletePeople(id) {
  await pool.query("DELETE FROM people WHERE id=$1;", [id]);
  console.log(`Poistettu ID: ${id} taulusta people`);
}


module.exports = { readPeople, createPeople, deletePeople };

