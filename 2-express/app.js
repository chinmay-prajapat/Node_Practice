const express = require("express");
const logger = require("./middlewares/logger");
const authorize = require("./middlewares/authorize");
const app = express();

app.use(logger, authorize); //Middleware in use

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/api/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(5000, () => {
  console.log("server running at 5000");
});
