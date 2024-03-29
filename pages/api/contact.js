const axios = require('axios');
const https = require('https');

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function validateHuman(token) {
  const tajno = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${tajno}&response=${token}`;
  const response = await axios.post(recaptchaUrl, {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });
  
  const data = await response.data;
  console.log(data);
  return data?.success;
}

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  
  const human = await validateHuman(body.token);

  if (!human) {
    res.status(400);
    res.json({ error: "Please, you're not a human."});
    return;
  }

  const { name, email, phone, message } = body.data;
  
  const emailData = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Phone: ${phone}\r\n
    Message: ${message}\r\n
  `;

  const data = {
    to: 'nenad.manoilov@gmail.com',
    from: 'team@nesha-testing.com',
    subject: `New Web Form message ${name}`,
    text: emailData,
    html: emailData.replace(/\r\n/g, '<br>')
  };

  mail.send(data)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({ status: 'Ok', data });
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ error });
    })

  
}
