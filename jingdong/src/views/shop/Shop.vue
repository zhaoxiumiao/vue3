<template>
  <div class="wrapper">
    <div class="search">
      <div 
        class="search__back iconfont"
        @click="handleBackClick"
      > &#xe601;</div>
      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe64c;</div>
        <input
          class="search__content__input" 
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
    <Content />
    <Cart />
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import ShopInfo from '../../components/ShopInfo'
import {get} from '../../utils/request'
import {useRouter, useRoute} from 'vue-router'
import Content from './Content'
import Cart from './Cart'

//获取当前商铺信息
const useShopInfoEffect = () =>{
  const route = useRoute()
  const data = reactive({item: {}})
  const getItemData = async () =>{
    const result = await get(`/api/shop/${route.params.id}`)
    if(result.errno === 0 && result.data){
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return {getItemData, item}
}

//点击回退逻辑
const useBackRouterEffect =() =>{
  const router = useRouter()
  const handleBackClick =()=>{
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components:{
    ShopInfo,
    Content,
    Cart
  },
  setup(){
    const {getItemData, item} =useShopInfoEffect()
    const {handleBackClick} = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick}
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  padding: 0 .18rem;

}
.search{
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back{
    width: .3rem;
    font-size: .24rem;
    color: #b6b6b6;
  }
  &__content{
    display: flex;
    flex: 1;
    background: $search_bgColor;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: $search_fontColor;
    }
    &__input{
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder{
        color: $content-fontcolor;
      }
    }
  }

}
</style>