
export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'comonocolombia@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })

  const mailData = {
    from: 'comonocolombia@gmail.com',
    to: 'johislp4@gmail.com, danilo@comono.co',
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200).json()
}