let fs = require("fs")
const process = require('process');

let arg2 = process.argv[3];

if (arg2 !== undefined) data2read = arg2
else data2read = "data.txt"
let readStream = fs.createReadStream(data2read,"utf8");


let firstword = "localhost";
let chunknumb = 0
let res = 0;
let arg1 = process.argv[2];
let wordtopass = "";

if (arg1 !== undefined) wordtopass = arg1
else wordtopass = firstword;


readStream.on("data", chunk => {
    let separate = chunk.split(wordtopass)
    chunknumb ++;
    res += separate.length -1
    console.log(`reading chunk number ${chunknumb}`)
    //console.log( `we found ${word} ${res.length -1} times and we had ${chunknumb} chunks`);
})

readStream.on("end", () => {
   console.log("end of data");
   console.log( `we found "${wordtopass}" ${res} times and we had ${chunknumb} chunks`);
});