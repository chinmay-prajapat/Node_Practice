const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});
app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found!");
});
app.listen(5000, () => {
  console.log("Server running at 5000");
});
3;
