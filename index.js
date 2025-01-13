
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// Body parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Nodemailer 설정
const transporter = nodemailer.createTransport({
    service: 'Gmail', // 이메일 서비스 제공자 (Gmail, Yahoo, Outlook 등)
    auth: {
        user: process.env.EMAIL_USER, // 본인의 이메일 주소
        pass: process.env.EMAIL_PASS   // 본인의 이메일 비밀번호 또는 앱 비밀번호
    }
});

app.post('/send-email', (req, res) => {
    const { name, email,phone, message } = req.body;
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    const mailOptions = {
        from: email,
        to: 'dmscjf2005@gmail.com',
        subject: `새로운 메시지: ${name}`,
        text: `이름: ${name}\n이메일: ${email}\n메시지:\n${message}\n 폰:${phone}`
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('메일 전송에 실패했습니다. 다시 시도해주세요.');
        }
        console.log('Email sent: ' + info.response);
        res.send('<script> alert("메일이 전송되었습니다. 감사합니다!");history.back();</script>');
    });
});

app.post('/contact', (req, res) => {
    const { name, email,phone, message } = req.body;
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    const mailOptions = {
        from: email,
        to: 'dmscjf2005@gmail.com',
        subject: `새로운 메시지: ${name}`,
        text: `이름: ${name}\n이메일: ${email}\n메시지:\n${message}\n 폰:${phone}`
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('메일 전송에 실패했습니다. 다시 시도해주세요.');
        }
        console.log('Email sent: ' + info.response);
        res.send('<script> alert("메일이 전송되었습니다. 감사합니다!");history.back();</script>');
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
