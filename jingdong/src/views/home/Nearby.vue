<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList" 
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <shop-info 
        :item="item"
      />
    </router-link>
    <!-- <div 
        class="nearby__item"
        v-for="item in nearbyList"
        :key="item._id"
    >
      <img
        :src="item.imgUrl"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.name}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag" >月售: {{item.sales}}</span>
          <span class="nearby__content__tag" >起送: {{item.expressLimit}}</span>
          <span class="nearby__content__tag" >基础运费: {{item.expressPrice}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.slogan}}</p>
      </div>
    </div> -->
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () =>{
  const nearbyList = ref([])
  const getNearbyList = async () =>{
    const result = await get('/api/shop/hot-list')
    console.log(result);
    if(result.errno === 0 && result.data.length){
        //result?.data?.errno 有点类似与三元运算符
        nearbyList.value = result.data
    } 
  }
  return {nearbyList, getNearbyList}
}

export default {
  name: "Nearby",
  components:{
    ShopInfo
  },
  setup(){
      const {nearbyList, getNearbyList} = useNearbyListEffect()
      getNearbyList()
      return {nearbyList}
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby{
  &__title{
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a{
    text-decoration: none;
  }
  
}
</style>