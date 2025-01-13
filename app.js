// app.js 파일에 아래의 코드를 작성합니다.

// Express.js 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// "/" 경로에 대한 요청에 "Hello, World!"를 응답합니다.
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 3000번 포트에서 서버를 실행합니다.
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
