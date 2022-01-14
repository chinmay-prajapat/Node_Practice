const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Home Page Page</h1><a href="/api/data">Products</a>');
});
app.get("/api/data", (req, res) => {
  console.log(req);
  const newProduct = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.send(newProduct);
});

app.get("/api/data/:id", (req, res) => {
  console.log(req.params.id);

  const { id } = req.params;
  const product = products.find((item) => item.id == id);

  return product
    ? res.json(product)
    : res.status(404).send("<h1>Oops no data found</h1>");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).send("Product not found");
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server at 5000");
});
