<script setup>

</script>
<template>
<div class="fullscreen">
    <div class="fullscreen__img">
        <img src="../../public/img/brows.jpg" alt="fullscreen">
        <div class="img__bg"></div>
    </div>
    <div class="fullscreen__content">
        <div class="content__bm">Brow Master</div>
        <div class="content__name">Dasha</div>
    </div>
</div>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";
.fullscreen {
    position: relative;
    height: calc(100vh - 70px);
    max-width: 1080px;
    &__img {
        height: 100%;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    &__content {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @extend %limiter
}
.img {
    &__bg {
        width: 100%;
        height: 100%;
        background-color: $colorBlock1;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
    }
}
.content {
    &__bm {
        @include adaptiv-font(70, 60);
        font-family: $fontAP;
        font-weight: bold;
    }

    &__name {
        @include adaptiv-font(70, 60);
    }
}

</style>

