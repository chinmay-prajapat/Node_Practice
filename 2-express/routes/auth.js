const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  if (req.body.name) {
    return res.status(200).send(`<h1>Welcome ${req.body.name}</h1>`);
  }
  return res.status(401).send("Please provide authorize name");
});
module.exports = router;
