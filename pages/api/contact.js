const mail = require('@sendgrid/mail');
const sanitizeHtml = require('sanitize-html');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body); 

  const message = `
    Name: ${sanitizeHtml(body.name)}\r\n
    Email: ${sanitizeHtml(body.email)}\r\n
    Phone: ${sanitizeHtml(body.phone)}\r\n
    Message: ${sanitizeHtml(body.message)}\r\n
  `;

  const data = {
    to: 'nenad.manoilov@gmail.com',
    from: 'team@nesha-testing.com',
    subject: `New Web Form message ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };

  mail.send(data);

  res.status(200).json({ status: 'Ok', data })
}
