const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event, context) => {
  const { name, email, phone, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'dmscjf2005@gmail.com',
    subject: `새로운 메시지: ${name}`,
    text: `이름: ${name}\n이메일: ${email}\n메시지:\n${message}\n 폰:${phone}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: '메일이 전송되었습니다. 감사합니다!' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '메일 전송에 실패했습니다. 다시 시도해주세요.' })
    };
  }
};
