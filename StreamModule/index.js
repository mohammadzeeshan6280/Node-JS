// 2ns Way
// Reading from a Stream
// Create a readable Stream
// Handle stream events ---> data, end, and error

/*
// const fs = require("fs")
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     fs.readFile("input.txt" , (err, data) => {
//         if (err) return console.error(err);
//         // console.log(data.toString());
//         res.end(data.toString());
//     });
// });

// server.listen(8000, "127.0.0.1");
*/


const fs = require("fs")
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    // const rstream = fs.createReadStream("inputs.txt");

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on('end', () => {
        res.end();
    });
    // Error file not read show error Message
    rstream.on('error' , (err) => {
        console.log(err); 
        res.end("file not found");
    })
});

server.listen(8000, "127.0.0.1");



