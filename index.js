const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);

        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);

        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);

        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("404.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);

        return;
      }

      res.end(data);
    });
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
