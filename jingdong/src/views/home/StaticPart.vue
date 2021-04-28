<template>
<div>
  <div class="position">
    <span class="iconfont position__icon">&#xe64f;</span>
    北京理工大学国防科技园
    <span class="iconfont position__notice">&#xe860;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe64c;</span>
    <span class="search__text">山姆会员</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div 
      class="icons__item"
      v-for="(item,index) in iconsList"
      :key="index"
    >
      <img
        :src="item.imgUrl"
        class="icons__item__img"
      />
      <p class="icons__item__desc">{{item.title}}</p>
    </div>
    
  </div>
  <div class="gap"></div>
</div>
</template>

<script>
export default {
  name: "StaticPart",
  setup(){
    const iconsList=[
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/红包.png',
        title:'红包套餐'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
      {
        imgUrl:'http://www.dell-lee.com/imgs/vue3/超市.png',
        title:'超市便利'
      },
    ]
    return { iconsList }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipse;
  .position__icon{
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice{
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.search{
  margin-bottom: .12rem;
  height: .32rem;
  line-height: .32rem;
  background: $search_bgColor;
  color: $search_fontColor;
  border-radius: .16rem;
  .iconfont{
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text{
    display: inline-block;
    font-size: .14rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    &__img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc{
      margin:.06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
  
}
</style>