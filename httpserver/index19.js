// Asynchronous
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {

//     // console.log(req.rul);
//     if (req.url == "/"){
//         res.end("Hello form the home sides")
//     }
//     else if (req.url == "/about"){
//         res.end("Hello form the AboutUs sides")
//     }
//     else if (req.url == "/contact"){
//         res.end("Hello form the ContactUs sides")
//     }
//     // API Data Access
//     else if (req.url == "/userapi"){
//         fs.readFile(`${__dirname}/UserApi/userapi.json`,
//             "utf-8",
//             (err, data) =>{
//                 console.log(data)
//                 const objData = JSON.parse(data)
//                 res.end(objData[2].name);
//                 // res.end(data);
//             }
//         );
//          } else {
//         res.writeHead(404, {"Content-type": "text/html"})
//         res.end(" <h1> 404 error pages. Page doesn't exist </h1>")
        
//     }
//     // res.end("Hello from the others sides by mohammad zeeshan"); // request data 
// })

// server.listen(8000, "127.0.0.1", () =>{
//     console.log("Listening to port no 8000")
// });



// Synchronous 
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
        res.writeHead(200, {"content-type" : "application/json"})
                res.end(objData[23].name);
         } else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.end(" <h1> 404 error pages. Page doesn't exist </h1>")
        
    }
    // res.end("Hello from the others sides by mohammad zeeshan"); // request data 
})

server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to port no 8000")
});