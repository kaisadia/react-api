const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;

const { readPeople, createPeople, deletePeople} = require("./db");
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const people = await readPeople();
  res.send(people);
});


app.post("/people", async (req, res) => {
  await createPeople(req.body);
  res.sendStatus(200);
});

app.delete("/people/:id", async (req, res) => {
  await deletePeople(req.params.id);
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
