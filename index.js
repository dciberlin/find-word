const fs = require("fs");
const path = require("path");

let [word, filePath] = process.argv.slice(2);

let chunkCounter = 0;
let wordTotal = 0;

let myStream = fs.createReadStream(filePath, "utf8");

myStream.on("data", chunk => {
  chunkCounter++;
  console.log(`I am reading chunk ${chunkCounter}`);
  let arr = chunk.toLowerCase().split(word);
  let res = arr.length - 1;
  wordTotal += res;
});

myStream.on("end", () => {
  console.log("End of data");
  console.log(`Number of chunks: ${chunkCounter}`);
  console.log(`Found ${word} ${wordTotal} times`);
});

myStream.on("error", err => {
  console.log(`Something went wrooong`);
  console.log(err);
});
