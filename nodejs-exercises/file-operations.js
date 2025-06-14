const fs = require('fs');


fs.writeFileSync('welcome.txt', 'Hello Node');


fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file:', err);
  }
  console.log('Content of hello.txt:', data);
});
