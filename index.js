let fs = require("fs");

let word = process.argv[2];
let path = process.argv[3];
// let [word, path] = process.argv.slice(2); destructuring way of writing
// let anyFile = path.join(__dirname, process.argv[3]); other possibility, for this you also have to require("path")

// this code read any file
let myStream = fs.createReadStream(path, "utf8");

let chunkNumber = 1;
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