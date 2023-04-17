const mongoose = require("mongoose"); // 

const cartSchema = new mongoose.Schema({ // schema를 정의함
  goodsId: {
    type: Number, // 타입은 정수
    required: true, // 무조건 존재 해야하며
    unique: true // 고유한 값
  },
  quantity: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Cart", cartSchema);