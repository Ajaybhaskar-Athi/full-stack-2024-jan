const fs = require('fs')

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error in reading file', err);
    }

    const jsonData = JSON.parse(data);

    jsonData.age = 35;
    jsonData.city = 'San';

    const updatedData = JSON.stringify(jsonData);

    fs.writeFile('data.json', updatedData, 'utf-8', (err) => {
        if (err) {
            console.error("Error writing file", err);
            return;
        }
        console.log("Updated sucess fully");
    })
})

//Compression
const fs = require('fs');
const zlib = require('zlib');
const inputFilePath = 'example.txt';
const compressedFilePath = 'example.txt.gz';
const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(compressedFilePath);
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);
writeStream.on('finish', () => {
    console.log('Compression complete.');
});

//Decompression
const decompressedFilePath = 'example-decompressed.txt';
const compressedReadStream = fs.createReadStream(compressedFilePath);
const decompressedWriteStream = fs.createWriteStream(decompressedFilePath);
const gunzip = zlib.createGunzip();
compressedReadStream.pipe(gunzip).pipe(decompressedWriteStream);
decompressedWriteStream.on('finish', () => {
    console.log('Decompression complete.');
});

//Comparing file size
// const inputFileSize = fs.statSync(inputFilePath).size;
// const compressedFileSize = fs.statSync(compressedFilePath).size;
// const decompressedFileSize = fs.statSync(decompressedFilePath).size;
// console.log(`Input file size: ${inputFileSize} bytes`);
// console.log(`Compressed file size: ${compressedFileSize} bytes`);
// console.log(`Decompressed file size: ${decompressedFileSize} bytes`);
const ipsize=fs.statSync('./express/practice/inp.txt').size;
const compressedSize=fs.statSync('./express/practice/inp.txt.gz').size;
const decompressedSize=fs.statSync('./express/practice/newinp.txt');
console.log("intial size of file: "+ipsize);
console.log("Size after compressing : "+compressedSize);
console.log("size after decompressing the compressed file: "+decompressedSize);
