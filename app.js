const express = require('express');
const app = express();
const port = 3005;

const goodsRouter = require('./routes/goods'); // './' = 상대 경로를 나타내는 것
// routes라는 폴더에서 goods.js 파일을 찾음
const cartsRouter = require("./routes/carts");
const connect = require("./schemas");
connect();



app.use(express.json()); // post, put 전달된 body 데이터를 req.body로 사용할 수 있도록 만든 bodyparser

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl, ' - ', new Date());
  next();
});

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter, cartsRouter]); // API가 사용되기 위한 라우터를 등록

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});