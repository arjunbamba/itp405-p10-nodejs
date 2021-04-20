// Another core module built into node - http module
const http = require("http");

// In node, we create a web server via code
// Node loads program into memory, so any changes you make to fle wont be reflected. You need to stop the server and restart it.
// Nodemon.io - tool that automatically reloads your node app. Can install by: npm install -g nodemon
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
      <h1>ITP 405</h1>
      <p>Hello class!</p>
    `);
    response.end();
  })
  .listen(8000);