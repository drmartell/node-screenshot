require('dotenv').config();
const nodemailer = require('nodemailer');

const
  host = process.env.SMTP_SERVER,
  user = process.env.SMTP_SENDER,
  pass = process.env.SMTP_PASSWORD,
  from = process.env.SMTP_SENDER,
  to = process.env.RECIPIENTS,
  replyTo = process.env.REPLY_TO;

// https://nodemailer.com/about/
const emailPosting = async(emailInfo) => {

  // SMTP transporter object
  const transporter = nodemailer.createTransport({
    host,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user,
      pass
    },
    tls: { 
      rejectUnauthorized: false 
    }
  });

  const info = await transporter.sendMail({ // eslint-disable-line no-unused-vars
    from, // '"Fred Foo 👻" <foo@example.com>', // sender address
    to, //'bar@example.com, baz@example.com', // list of receivers
    replyTo,
    subject: 'New Screenshot - ' + emailInfo.title, // Subject line
    //text: 'Hello world?', // plain text body
    html: emailInfo.html //'<b>Hello world?</b>' // html body
  });

  //console.log('Message sent: %s', info.messageId);
};

module.exports = emailPosting;
