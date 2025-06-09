const fs = require('fs');

// إنشاء ملف welcome.txt يحتوي على "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// قراءة ملف hello.txt وطباعة محتواه (تأكد من وجود hello.txt أو أنشئه)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file:', err);
  }
  console.log('Content of hello.txt:', data);
});
