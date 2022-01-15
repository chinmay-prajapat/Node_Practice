const express = require("express");

let { people } = require("./data/data");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", (req, res) => {
  res.send(`<h1>Welcome ${req.body.name}</h1>`);
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.filter((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `${id} not found` });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPerson });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `${id} not found` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, people: newPeople });
});

app.listen(5000, () => {
  console.log("server at 5000");
});
