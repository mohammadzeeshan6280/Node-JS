const http = require("http");
const url = require('url');

const server = http.createServer((req, res) => {
    // console.log(req.rul);
    if (req.url == "/"){
        res.end("Hello form the home sides")
    }
    else if (req.url == "/about"){
        res.end("Hello form the AboutUs sides")
    }
    else if (req.url == "/contact"){
        res.end("Hello form the ContactUs sides")
    }
   
    else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.end(" <h1> 404 error pages. Page doesn't exist </h1>")
        
    }
    // res.end("Hello from the others sides by mohammad zeeshan");
})

server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to port no 8000")
});
