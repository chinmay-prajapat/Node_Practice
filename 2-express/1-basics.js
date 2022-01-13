const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(400).send("<h1>Resource not found</h1>");
});
app.listen(5000, () => {
  console.log("server at 5000");
});
