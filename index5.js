// const name = "ansari"
// console.log(name)

const fs = require("fs");

// creating a new File
// fs.writeFileSync("read.txt", "welcome to my channel");

// data over write 
// fs.writeFileSync("read.txt", "thapa technical , welcome to my channel");

// data append now
// fs.appendFileSync('read.txt'," how are you i am fine thank you:")


// Node.js includes an additionl data type called Buffer
// (not available in browser's JavaScript)
// Buffer is mainly use to store binary data,
// while reading from a file or receiving packets over the network.
{/* <Buffer 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 0d 0a 0d 0a 20 68 6f 77 20 61 72 ... 26 more bytes> */}

// Additoinal Fuffer Database
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

//show original data read
// org_data = buf_data.toString(); 
// console.log(org_data);

// To rename the file old path and new path
// fs.renameSync('reads.txt', "readwrites.txt")

// remove file
// fs.rmSync("readwrites.txt");

// remove folder
fs.rmdirSync("whitehat");




// console.log("Welcome to node js")