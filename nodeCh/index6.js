const { create } = require('domain');

const fs = require('fs');

// 1. Create a folder named it Thapa
// fs.mkdirSync("Whitehat");

// 2. Create a file in it named bio.txt and data into it.
// fs.writeFileSync('Whitehat/bio.txt', "my name is vinod bhadur thapa")

// 3. Add more data into the file at the end of the existing data.
// fs.appendFileSync('Whitehat/bio.txt', "plz to my channel")

// 4. Read the data without getting the buffer data at first. and file encoding Default: 'utf8'
// const data = fs.readFileSync("Whitehat/bio.txt", "utf-8")
// console.log(data);

// 5. Rename the file name to mybio.txt
// fs.renameSync("Whitehat/bio.txt", "mybio.txt")

// 6. Now delete both the file and the folder
// fs.unlinkSync('mybio.txt')
// fs.rmdirSync("Whitehat")

/*CRUD
Create
Read
Update
Delete
*/