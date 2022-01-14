const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Home Page Page</h1><a href="./data">Products</a>');
});
app.get("/data", (req, res) => {
  console.log(req);
  const newProduct = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.send(newProduct);
});

app.get("/data/:id", (req, res) => {
  console.log(req.params.id);

  const id = req.params.id;
  const product = products.find((item) => item.id == id);
  res.json(product);
});

app.listen(5000, () => {
  console.log("Server at 5000");
});
