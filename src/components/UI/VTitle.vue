<script setup>

</script>
<template>
<div class="title">
    <h2><slot></slot></h2>
</div>
</template>
<style scoped lang="scss">

.title {
    margin-bottom: 20px;
    text-align: center;
    h2{
        font-size: 32px;
    }
    h2::before{
        content: url(../../public/img/icons/i2.png);
        margin-right: 20px;
    }
    h2::after{
        content: url(../../public/img/icons/i1.png);
        margin-left: 20px;
    }
} 
</style>

