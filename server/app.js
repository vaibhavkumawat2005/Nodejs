const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8001;

http.createServer((req, res) => {
  const routes = {
    "/": "home.html",
    "/server/home.html": "home.html",
    "/server/about.html": "about.html",
    "/server/contact.html": "contact.html",
    "/server/NotFound.html": "404_not_found.html",
    default: "404_not_found.html"
  };

  const file = routes[req.url] || routes.default;
  const is404 = !routes[req.url] && file === routes.default;
  const contentType = file.endsWith(".html") ? "text/html" : "text/css";

  fs.readFile(path.join(__dirname, file), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(is404 ? 404 : 200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}).listen(port, () => console.log(`Server running at http://localhost:${port}`));