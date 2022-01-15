export default {
   // 存在的商品，已有数量+1
  addCounter (state, payload) {
    state.cartList[payload].count++
  },
  // 不存在的商品，商品+1
  addGoods (state, payload) {
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
  changeChecked (state, payload) {
    state.cartList[payload].checked = !state.cartList[payload].checked
  },
  changeAllChecked (state) {
    if (state.cartList.length !== 0) {
      if (state.cartList.find(item => !item.checked)) {
        for (let item of state.cartList) { item.checked = true }
      } else {
        for (let item of state.cartList) { item.checked = false }
      }
    }
  }


}