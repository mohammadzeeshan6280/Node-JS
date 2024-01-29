// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can be used to get information about the current HTTP request
// e.g. url, request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:


const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the others sides by mohammad zeeshan");
})


server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to port no 8000")
});



/*
const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
    res.end("Hello from the others sides by mohammad zeeshan");
})

// server.listen(8000, "127.0.0.1", () =>{
//     console.log("Listening to port no 8000")
// });

server.listen(port, "127.0.0.1", () =>{
    console.log(`Listening to port no ${port}`)
});

*/





/*
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
        const objData = JSON.parse(data);

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
    // API Data Access
    else if (req.url == "/userapi"){
        // fs.readFile(`${__dirname}/UserApi/userapi.json`,
        //     "utf-8",
        //     (err, data) =>{
        //         console.log(data);
        //         const objData = JSON.parse(data)
                // res.end(objData[0].name);
                res.end(objData[3].title); // data show with api
                // res.end(data)
                res.writeHead(200, {"content-type": "application/json"})
    }
    );
  }  else {
        res.writeHead(404, {"Content-type": "text.html"})
        res.end(" <h1> 404 error pages. Page doesn't exist </h1>")
        
    }
    // res.end("Hello from the others sides by mohammad zeeshan");
})

server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to port no 8000")
});

*/