import { createStore } from 'vuex';

const setLocalCartList = (state) =>{
  const {cartList} = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () =>{
  console.log(localStorage.cartList);
  return JSON.parse(localStorage.getItem('cartList')) || {}
}

export default createStore({
  state: {
    cartList: getLocalCartList() 
    // {
      //数据结构
      //第一层级是商铺id
      //第二层是商品内容以及购物数量
      // shopId{
      //   shopName: '沃尔玛',
      //   productList:{
      //     productId:{
      //     }
      //   }
      // }

    // }
  },
  mutations: {
    changeCartItemInfo(state, payload){
      const {shopId, productId, productInfo, num} = payload
      let shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList:{}
      }
      let product = shopInfo.productList[productId]
      if(!product){
        product = productInfo
        product.count = 0
        product.check = 0
      }
      product.count += num
      if(num > 0) {product.check = true}
      if(product.count < 0) {product.count = 0}
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
      // console.log(state.cartList);
    },
    changeCartItemChecked(state,payload){
      const {shopId, productId} = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state,payload){
      const {shopId} = payload
      state.cartList[shopId] = {
        shopName: '',
        productList:{}
      }
      setLocalCartList(state)
    },
    setCartItemsChecked(state,payload){
      const {shopId} = payload
      const products = state.cartList[shopId].productList
      if(products){
        for(let key in products){
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    changeShopName(state, payload){
      const {shopId, shopName} = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList:{}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    }
    
  },
  actions: {
  },
  modules: {
  }
})
