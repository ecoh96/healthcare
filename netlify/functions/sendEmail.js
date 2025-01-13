const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // 환경 변수에서 설정 값 가져오기
  const { NAVER_SMTP_HOST, NAVER_EMAIL, NAVER_PASSWORD, RECIPIENT_EMAIL } = process.env;

  // nodemailer로 SMTP 서버 설정
  const transporter = nodemailer.createTransport({
    host: NAVER_SMTP_HOST, // 환경 변수에서 SMTP 서버 주소 가져오기
    port: 587,
    secure: false,
    auth: {
      user: NAVER_EMAIL, // 환경 변수에서 이메일 계정 사용자 이름 가져오기
      pass: NAVER_PASSWORD, // 환경 변수에서 이메일 계정 비밀번호 가져오기
    },
  });

  // 메일 설정 및 전송
  try {
   const mailOptions = {
     from: '"EcoHealthCare" <eco@ohcare.shop>', // 발신자 주소
     to: 'dhdmscjf2002@naver.com', // 수신자 주소
     subject: 'New Inquiry from Your Website', // 제목
     text: `You have received a new inquiry from ${name}, Phone: ${phone}, Message: ${message}`, // 내용
     html: `<p>You have received a new inquiry from <strong>${name}</strong></p><p>Phone: ${phone}</p><p>Message: ${message}</p>` // HTML 내용
   };

    // 메일 전송 성공 응답
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email successfully sent" }),
    };
  } catch (error) {
    // 메일 전송 실패 응답
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
