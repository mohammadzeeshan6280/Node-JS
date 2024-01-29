// Challenge Time

// 1. Create a folder named it Thapa
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first. and file encoding
// 5. Rename the file name to mybio.txt
// 6. Now delete both the file and the folder

/*
CRUD
Create
Read
Uodate
Delete
*/


const fs = require('fs');

// 1. Create a folder named it Thapa
// fs.mkdir('thapa',(err) => {
//     console.log("folder created")
// });

// 2. Create a file in it named bio.txt and data into it.
// fs.writeFile('./thapa/bio.txt', 'my name is vinod thapa', (err) => {
//     console.log("files created")
// })

// 3. Add more data into the file at the end of the existing data.
// fs.appendFile('./thapa/bio.txt', 'plz shre and like thid video', (err) => {
//     console.log("files data appended")
// })

// 4. Read the data without getting the buffer data at first. and file encoding
// fs.readFile('./thapa/bio.txt', 'utf-8' , (err, data) => {
//     console.log("read file data ")
//     console.log(data)
// })

// 5. Rename the file name to mybio.txt
// fs.rename('./thapa/bio.txt', './thapa/mybio.txt', (err) => {
//     console.log("file reanme")
// })

// 6. Now delete both the file and the folder
// fs.unlink('./thapa/mybio.txt', (err) =>{
//     console.log("file remove")
// })

// fs.rmdir('./thapa', (err) =>{
//     console.log("folder remove")
// })
