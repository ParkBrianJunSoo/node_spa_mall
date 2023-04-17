const express = require('express');
const app = express();
const port = 3002;

const goodsRouter = require('./routes/goods'); // './' = 상대 경로를 나타내는 것
// routes라는 폴더에서 goods.js 파일을 찾음
const cartsRouter = require("./routes/carts");
const connect = require("./schemas");
connect();



app.use(express.json());

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});