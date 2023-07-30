<script setup>

</script>
<template>
<div class="block__rec">
    <div class="reception">
        <!-- <div class="cross"><span></span></div> -->
        <div class="reception__text">У розробці...</div>
    </div>
</div>
</template>
<style lang="scss">
.block__rec{
    position: absolute;
    height: calc(100vh - 70px);
    width: 100%;
}
.reception{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    background-color: #fff;
    z-index: 900;
    display: flex;
    flex-direction: column;
    
    display: flex;
    align-items: center;
    justify-content: center;
    &__text{
        font-size: 40px;
    }
}
.cross{
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
    &::before{
        content: '';
        transition: all 300ms;
        left: 0;
        top: 0;
        position: absolute;
        height: 8%;
        width: 100%;
        background-color: #000;
    }
    &::after{
        content: '';
        transition: all 300ms;
        left: 0;
        bottom: 0;
        position: absolute;
        height: 10%;
        width: 100%;
        background-color: #000;
    }
    span{
        transition: all 300ms;
        left: 0;
        top: 50%;
        transform: scale(1) translate(0px, -50%);
        position: absolute;
        height: 10%;
        width: 100%;
        background-color: #000;
    }
}
</style>
