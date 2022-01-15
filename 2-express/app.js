const express = require("express");

let { people } = require("./data/data");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
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

app.post("/login", (req, res) => {
  res.send(`<h1>Welcome ${req.body.name}</h1>`);
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  res.send("heelo");
});

app.listen(5000, () => {
  console.log("server at 5000");
});
