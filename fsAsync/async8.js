const fs = require("fs");

//  Synchronous
// const data = fs.readFileSync("read.txt", "utf-8")
// console.log(data)
// console.log("after the data")

// Asynchronous
fs.readFile("read.txt", "utf-8", (err, data) =>{
    console.log(data)
})
console.log("after the data")