const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'example.txt');
//synchronous way of creating the file
fs.writeFileSync(filePath, 'Hello from node js');
console.log('File created successfully');

const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log("File content:", readContentFromFile);

fs.appendFileSync(filePath, '\nHello from node js again');
console.log('File updated successfully');