const mongoose = require("mongoose"); // require("mongoose")의 패키지에서 갖고 와서 mongoose의 변수에 할당

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/spa_mall") // connect라는 것을 통해 몽고디비로 연결
    // .connect("mongodb://localhost:27017/spa_mall")를 사용하였지만 const err = new MongooseError(message); 라는 err만 계속 나타났다.
    .catch(err => console.log(err)); // catch err을 통해 에러를 케치하여 발생한 에러를 출력함
};

mongoose.connection.on("error", err => { //몽구스로 연결이 됐을 때 에러가 발생했으면 에러 출력
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect; // 밖으로 내보내짐