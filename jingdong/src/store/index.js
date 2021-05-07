import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺id
      //第二层是商品内容以及购物数量

    }
  },
  mutations: {
    addItemToCart(state, payload){
      const {shopId, productId, productInfo} = payload
      console.log(payload);
      let shopInfo = state.cartList[shopId]
      if(!shopInfo){shopInfo = {}}
      let product = shopInfo[productId]
      if(!product){
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      // console.log(shopId, productId, productInfo);
    },
    lessItemToCart(state, payload){
      const {shopId, productId, productInfo} = payload
      console.log(payload);
      let shopInfo = state.cartList[shopId]
      if(!shopInfo){shopInfo = {}}
      let product = shopInfo[productId]
      if(!product){
        product = productInfo
        product.count = 0
      }
      if(product.count*1){
        product.count -= 1
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(state.cartList.value);
      // console.log(shopId, productId, productInfo);
    },
  },
  actions: {
  },
  modules: {
  }
})
