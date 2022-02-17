import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devmightyeagle@gmail.com',
    pass: 'Servantofgod1996',
  },
});

const mailOptions = {
  from: 'mightyeaglecorp@gmail.com',
  to: 'saintkalson@gmail.com',
  subject: 'Mighty Eagle Corp ICT HUB',
  text: 'We are moving o',
  html: emailTemplate('Kalson'),
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
