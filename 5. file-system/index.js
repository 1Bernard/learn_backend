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
console.log('new file content added successfully');

//asynchronous way of creating the file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello Async node js', (err) => {
  if (err) throw err;
  console.log('Async file created successfully');

  fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {
      if (err) throw err;
      console.log('New line added to Async file');
    })

    fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
      if (err) throw err;
      console.log("Updated file content:", data);
    })
  })

})