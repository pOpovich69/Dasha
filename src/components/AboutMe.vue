<script setup>
import VTitle from './UI/VTitle.vue';

</script>
<template>
    <div class="about">
    <VTitle>Про мене</VTitle>
    <div class="about__content">
        <div class="about__img">
            <img src="../../public/img/about.jpg" alt="about img">
        </div>
        <div class="about__text">
            <span>
                Привіт! <br/>
                Мене звати Даша і я завжди проявляла інтерес до брів. Спочатку в вільний час я фарбувала брови собі, а потім знайомим.<br/>
                В один момент вирішила, що потрібно пройти курс. Після довгих пошуків я знайшла свого вчителя Єву.
                Яка дала мені необхідні знання і море корисного досвіду!
            </span>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";
.about {
    background-color: $colorBlock2;
    padding-top: 20px;
    padding-bottom: 100px;
    &__content {
        padding: 0px 70px;
        display: flex;
        align-items: center;
    }
    &__img {
        max-width: 310px;
        // width: 100%;
        height: 100%;
        margin-right: 48px;
        img{
            width: calc(100% - 20px);
            height: 100%;
            object-fit: cover;
            border: 10px solid $colorBrown; 
        }
    }
    &__text {
        @include adaptiv-font(24, 20); 
    }
    @extend %limiter;
}
@media (max-width: 810px) {
    .about{
        &__content{
            padding: 0px 30px;
        }
    }
}
@media (max-width: 647px) {
    .about{
        &__content{
            flex-direction: column;
            justify-content: center;
        }
        &__img{
            margin-right: 0px;
        }
        &__text {
            text-align: center;
        }
    }
}

</style>