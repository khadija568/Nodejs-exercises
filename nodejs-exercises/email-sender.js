const nodemailer = require('nodemailer');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',       
      pass: 'your_app_password',           
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
