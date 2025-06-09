const nodemailer = require('nodemailer');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',       // استبدلها بإيميلك
      pass: 'your_app_password',           // كلمة المرور أو كلمة مرور التطبيق
    }
  });

  let info = await transporter.sendMail({
    from: '"Node.js Test" <your_email@gmail.com>', 
    to: 'your_email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js',
  });

  console.log('Message sent: %s', info.messageId);
}

sendEmail().catch(console.error);
