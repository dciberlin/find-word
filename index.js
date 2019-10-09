let fs = require("fs");
let path = require("path");
let anyFile = path.join(__dirname, process.argv[3]);

// this code read any file
let myStream = fs.createReadStream(anyFile, "utf8");

let chunkNumber = 1;
let word = process.argv[2];
let wordCounter = 0;

myStream.on("data", chunk => {
  console.log(`Reading chunk ${chunkNumber} `);
  chunkNumber++;

  let arr = chunk.toLowerCase().split(word);
  wordCounter += arr.length - 1;
});

myStream.on("end", () => {
  console.log("End of data");
  console.log(
    `Number of chunks: ${chunkNumber - 1}\nFound ${word} ${wordCounter} times`
  );
});
