<script setup>
import VTitle from './UI/VTitle.vue'

</script>
<template>
    <div class="contacts">
        <VTitle>Контакти</VTitle>
        <div class="contacts__row">
            <div class="contacts__data">
                <div class="contacts__inst"><a href="https://www.instagram.com/browws.sade/" target="_blank">Instagram: @browws.sade</a></div>
                <div class="contacts__face"><a href="https://www.facebook.com/dasha.diadiunova" target="_blank">Facebook: Dasha Diadiunova</a></div>
            </div>
            <div class="contacts__img">
                <img src="../../public/img/contact.jpg" alt="contacts img">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";

.contacts {
    background-color: $colorBlock2;
    &__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
    }
    &__data {
        font-weight: bold;
    }
    &__inst {
        font-family: $fontAP;
        @include adaptiv-font(34, 30);
        a{
            font-family: $fontAP;
            @include adaptiv-font(34, 30);
        }
    }
    &__face {
        font-family: $fontAP;
        @include adaptiv-font(34, 30);
        a{
            font-family: $fontAP;
            @include adaptiv-font(34, 30);
        }
    }
    &__img {
        max-width: 320px;
        height: 100%;
        img{
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            object-fit: cover;
            border: 10px solid $colorBrown
        }
    }
@extend %limiter;
}


</style>
