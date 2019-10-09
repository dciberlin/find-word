let fs = require('fs');
let newWord = process.argv[2];
let path = process.argv[3];
let arr = 0;

let myStream = fs.createReadStream(path, 'utf8');

// console.log(myStream);
let chunkNumber = 1;
let word = newWord;
let numberOfChunks = 0;


// console.log(myStream);


//the event listener below runs through each chunk until the file is over
myStream.on('data', chunk => {
    console.log(`Reading chunk ${chunkNumber}`);
    chunkNumber++;
    numberOfChunks++;

    arr += chunk.toLowerCase().split(word).length - 1;
});


//the event below will run until when the event above is over
myStream.on('end', () => {
    console.log('End of Data');
    console.log(`Number of chunks: ${numberOfChunks}`);
    console.log(`Found '${word}' ${arr} times.`);
    console.log('=================================');
});