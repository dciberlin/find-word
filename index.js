//Connect FS
let fs = require("fs");
// use terminal arguments
let word = process.argv[2]
let path = process.argv[3]
//Create the ReadStream
let myStream = fs.createReadStream(path, "utf8")
//Define the global variables
let chunkNumber = 1;
let wordCounter = 0;
let chunkCount = 0;
let arry = 0;
// Read chunks of data with callback function
myStream.on("data", chunk => {
//Counting Number of Chunks and numbering them
console.log(`Reading chunk ${chunkNumber}`);
chunkNumber++;
chunkCount++;
// count the appearance of the word in the file by chunks
arry = arry + chunk.split(word).length-1;


});
//display the results using "end" type
myStream.on("end", () => {
    console.log(`====================`);
    console.log(`End of data\nNumber of chunks: ${chunkCount}\nFound ${word} ${arry} times`)
})