<script setup>
import { ref, onMounted } from 'vue';
import imgs from '../data/slider.json'
import VTitle from '../components/UI/VTitle.vue'

const data = ref(imgs);


onMounted( () => {
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    centerMode: false,
    responsive: [
    {
      breakpoint: 1180,
      settings: {
        centerMode: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 591,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]})
});

</script>
<template>
  <div class="slider__block">
    <VTitle>Мої роботи</VTitle>
    <div class="slider">
    <div class="slider__item" v-for="item in data" :key="item.id"> 
        <div class="slider__img">
            <img :src="item.img" alt="slider img">
        </div>
    </div>
</div>
  </div>

</template>
<style scoped lang="scss">
@import "../scss/variables.scss";

.slider__block{
  background-color: $colorSlider;
  padding-top: 30px;
  padding-bottom: 120px;
  @extend %limiter;
}
.slider {
  position: relative;
  padding: 0px 20px;
  padding-top: 45px;

    &__item {
        margin: 0px 20px;
    }
    &__img {
        height: 360px;
        img{
            border: 10px solid $colorBrown;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            object-fit: cover;
        }
    }
}

</style>
