import cron from 'node-cron'
import nodemailer from 'nodemailer'

// Creating User for test
// User: ijeahfb7xjyjpwtw@ethereal.email
// Password: TcXpb1be8K23H6cpce

// nodemailer.createTestAccount().then(account => {
//   console.log(account);
// })

// Create transport
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: 'ijeahfb7xjyjpwtw@ethereal.email',
    pass: 'TcXpb1be8K23H6cpce'
  }
});

// Send email of testing
cron.schedule(' */2 * * * *', async () =>{
  const info = await transporter.sendMail({
    from: "barrerafernando@gmail.com",
    to: "raicoacosta@gmail.com",
    subject: "practice webs",
    text: "Hello World testing"
  })
  console.log(info.messageId)

  const previewURL = nodemailer.getTestMessageUrl(info)
  console.log(previewURL)
})