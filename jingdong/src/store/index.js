import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺id
      //第二层是商品内容以及购物数量
      // shopId{
      //   shopName: '沃尔玛',
      //   productList:{
      //     productId:{

      //     }
      //   }
      // }

    }
  },
  mutations: {
    changeCartItemInfo(state, payload){
      const {shopId, productId, productInfo, num} = payload
      let shopInfo = state.cartList[shopId] || {}
      let product = shopInfo[productId]
      if(!product){
        product = productInfo
        product.count = 0
        product.check = 0
      }
      product.count += num
      if(num > 0) {product.check = true}
      if(product.count < 0) {product.count = 0}
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      // console.log(shopId, productId, productInfo);
    },
    changeCartItemChecked(state,payload){
      const {shopId, productId} = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    cleanCartProducts(state,payload){
      const {shopId} = payload
      state.cartList[shopId] = {}
    },
    setCartItemsChecked(state,payload){
      const {shopId} = payload
      const products = state.cartList[shopId]
      if(products){
        for(let key in products){
          const product = products[key]
          product.check = true
        }
      }
    }
    
  },
  actions: {
  },
  modules: {
  }
})
