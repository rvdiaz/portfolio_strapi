require('dotenv').config();
const nodemailer =require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
    try {
    const oauth2Client = new OAuth2(
      process.env.OAUTH_CLIENTID,
      process.env.OAUTH_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.OAUTH_REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject();
            }
            resolve(token);
            });
    });

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          accessToken,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
      });
     
      return transporter;
    } catch (error) {
        console.log(error);
    }
  }


const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  };

  module.exports={
    sendEmail
  }