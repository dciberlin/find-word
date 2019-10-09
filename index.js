let fs = require("fs");
let wordN = process.argv[2]
let path = process.argv[3]
console.log(wordN)

let myStream = fs.createReadStream(path, "utf8")
console.log(myStream)
let chunkNumber = 1;
let word = wordN;
let wordCounter = 0;
let chunkCount = 0;
let arry = 0;

myStream.on("data", chunk => {
let len = chunk.length;
console.log(`Reading chunk ${chunkNumber}`);
chunkNumber++;
chunkCount++;

arry = arry + chunk.split(word).length-1;


});
myStream.on("end", () => {
    console.log(`====================`);
    console.log(`End of data\nNumber of chunks: ${chunkCount}\nFound ${word} ${arry} times`)
})