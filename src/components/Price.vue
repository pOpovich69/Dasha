<script setup>
import { ref } from 'vue';
import VTitle from '../components/UI/VTitle.vue'
import priceJ from '../data/price.json'

const data = ref(priceJ);

</script>
<template>
    <div class="price">
        <VTitle>Ціни</VTitle>
        <div class="price__row">
            <ul class="price__list">
                <li v-for="item in data">
                    <div class="item__row">                    
                        <div class="procedure__name">{{item.procedure}}</div>
                        <div class="procedure__price">{{ item.price }}<span>грн</span></div>
                    </div>
                </li>
            </ul>
            <div class="price__img"><img src="../../public/img/price.jpg" alt="price img"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";
.price {
    background-color: $colorPrice;
    padding-top: 30px;
    padding-bottom: 85px;
    &__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        padding-top: 20px;
    }
    &__list {
        width: 100%;
        padding-right: 150px;
        li{
            position: relative;
            padding-left: 35px;
            .item__row{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            width: 100%;
            margin-bottom: 26px;
        }
        li::before{
            content: url(../../public/img/icons/i2.png);
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        li:last-child{
            margin-bottom: 0px;
        }
    }
    &__img {
        max-width: 320px;
        img{
            width: calc(100% - 20px);
            border: 10px solid $colorBrown
        }
    }
    @extend %limiter;
}
.procedure {
    &__name {
        font-family: $fontAP;
        font-weight: bold;
        @include adaptiv-font(26, 22);
    }
    &__price {
        font-family: $fontAP;
        font-weight: bold;
        @include adaptiv-font(26, 22);
        span{
            font-size: 16px;
            font-family: $fontAP;
        }
    }
}
@media (max-width:849px) {
    .price{
        &__list{
            padding-right: 50px;
            padding-bottom: 50px;
        }
    }
}
@media (max-width:768px) {
    .price{
        &__row{
            flex-direction: column;
        }
        &__list{
            margin-bottom: 0px;
        }
    }
}

</style>
