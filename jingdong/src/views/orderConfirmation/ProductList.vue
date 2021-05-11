<template>
    <div class="products">
        <div class="products__title">{{shopName}}</div>
        <div class="products__list">
            <div 
                class="products__item"
                v-for="item in productList"
                :key="item._id"
            >
                <img class="products__item__img" :src="item.imgUrl" />
                <div class="products__item__detail">
                    <h4 class="products__item__title">{{item.name}}</h4>
                    <p class="products__item__price">
                        <span>
                            <span class="products__item__yen">&yen;</span>
                            {{item.price}} x {{item.count}}
                        </span>
                        <span class="products__item__total">
                            <span class="products__item__yen">&yen;</span>
                            {{(item.price * item.count).toFixed(2)}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import {useCommonCartEffect} from '../../effects/cartEffects'
export default {
    name: 'ProductList',
    setup(){
        const route = useRoute()
        const shopId = route.params.id
        const {productList, shopName} = useCommonCartEffect(shopId)
        return {productList, shopName}
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.products{
    margin: .16rem .18rem .55rem .18rem;
    background: $bgColor;
    &__title{
        padding: .16rem 0 0 .16rem;
        font-size: .16rem;
        color: $content-fontcolor;
    }
    &__list{
        overflow-y: scroll;
        max-height: 3.5rem;
        margin-bottom: .8rem;
    }
    &__item{
        position: relative;
        display: flex;
        padding: .16rem;
        
        &__img{
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__detail{
            flex: 1;
        }
        &__title{
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipse;
        }
        &__price{
            display: flex;
            margin: .06rem 0 0 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightlight-fontColor;
        }
        &__total{
            flex: 1;
            text-align: right;
            color: $dark-fontColor;
        }
        &__yen{
            font-size: .12rem;
        }
    }
}
</style>