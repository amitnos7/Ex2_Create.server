const http = require("http");
const fs = require("fs"); 

// Read the HTML file as a string
let html = fs.readFileSync(__dirname + "/Templates/Page.html", "utf8");


const heading = "Book Component By Function"; 
html = html.replace("{h1-heading}", heading);


const server = http.createServer(function (req, res) {
  
  res.writeHead(200, { "Content-Type": "text/html" });
  
  res.end(html);
});

server.listen(3000); // 
console.log("The Server is running at \n http://localhost:3000");
