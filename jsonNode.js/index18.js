
// const bioData = {
//     name : "zeeshan",
//     age : 25,
//     channel : "m2z info",
// };

// console.log(bioData)
// console.log(bioData.channel)
// console.log(bioData.name)

// {"name":"zeeshan","age":25,"channel":"m2z info"} // Result JSON DATA
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)
// console.log(jsonData.channel) // Undefinned


// { name: 'zeeshan', age: 25, channel: 'm2z info' }
// const objData = JSON.parse(jsonData)
// console.log(objData)
// console.log(objData.channel)



// 1. convert to JSON
// 2. dusre file me add krdena
// 3. readfile 
// 4. again convert back to js obj original
// 5. console.log


// 1. convert to JSON
const fs = require("fs");
const bioData = {
    name : "zeeshan",
    age : 25,
    channel : "m2z info",
};

// 2. dusre file me add krdena
const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json', jsonData, (err) =>{
//     console.log("done")
// })

// 3. readfile 
fs.readFile('json1.json', "utf-8", (err, data) =>{
    // console.log("data")
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});

// {"name":"zeeshan","age":25,"channel":"m2z info"}
// { name: 'zeeshan', age: 25, channel: 'm2z info' }
