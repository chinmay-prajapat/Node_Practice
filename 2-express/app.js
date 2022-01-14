const express = require("express");
const logger = require("./middlewares/logger");

const app = express();

app.get("/", logger, (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/about", logger, (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(5000, () => {
  console.log("server running at 5000");
});
