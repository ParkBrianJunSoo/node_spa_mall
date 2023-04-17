const mongoose = require("mongoose"); // 

const goodsSchema = new mongoose.Schema({ // schema를 정의함
  goodsId: {
    type: Number, // 타입은 정수
    required: true, // 무조건 존재 해야하며
    unique: true // 고유한 값
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  }
});

module.exports = mongoose.model("Goods", goodsSchema);