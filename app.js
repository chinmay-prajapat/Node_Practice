const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our hom page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`<h1>Ooops!</h1>
    <p>We Go Back To Home</p>
    <a href="/">Back to Home</a>
    `);
  }
});
server.listen(5001, () => {
  console.log("server at 5001");
});
