const express = require("express");
 const app = express();  //함수처럼 express 실행
 const port = 3000;
const requestMiddleware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl," - ",new Date());
    next();  //next()가 없으면 무한루프에 걸린다
};
 //미들웨어(get.use)
app.use(requestMiddleware);
//GET이라는 HTTP메서드로 아래 경로로 요청이 들어왔다.(app.get)
app.get('/', (req, res) => {
    res.send("Hello World");
});
//서버를 켜는 코드(app.listen)
 app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!")
 });
 //자바스크립트라는 언어로 코드를 짜고, node.js를 이용하여 실행한 후
 //exprees.js를 이용하여 웹서버를 구현했어요.