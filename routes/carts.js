const express = require("express");
const router = express.Router();

const Cart = require("../schemas/cart.js");
const Goods = require("../schemas/goods.js");

// localhost:3002/api/carts GET Method
router.get("/carts", async (req, res) => {
    const carts = await Cart.find({});
    // [{goodsId, quantity}]; 내용들이 배열 안에 있으므로 map을 써서 순회시켜줌
    const goodsIds = carts.map((cart) => {
        return cart.goodsId;
    }) // [2, 11, 19];

    const goods = await Goods.find({goodsId: goodsIds})
    // Goods에 해당하는 모든 정보를 가지고 올건데, 만약 goodsIds 변수 안에 존재하는 값을 때에만 조회해라

    const results = carts.map((cart) => {
        return {
            "quantity": cart.quantity,
            "goods": goods.find((item) => item.goodsId === cart.goodsId), // 이부분은 array.find와 같다
        }
    })

    res.json({
        "carts": results,
    })
});

module.exports = router;