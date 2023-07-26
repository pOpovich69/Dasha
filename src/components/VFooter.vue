<script setup>

</script>
<template>
<footer class="footer">
    <div class="footer__row">
        <div class="author">author: <a href="https://github.com/pOpovich69">pOpovich69(Mykyta Diadiunov)</a></div>
        <div class="author__contact">email: mykytadiadiunov@gmail.com</div>
    </div>
</footer>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";
.footer {
    @extend %limiter;
    height: 60px;
    position: relative;
    bottom: 0;
    left: 0;
    &__row{
        background-color: $colorHeader;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: calc(100% - 40px);
        padding: 0 20px;
    }
}
.author {
    font-family: $fontAP;
    font-weight: bold;
    @include adaptiv-font(14, 10); 
    a{
        font-family: $fontAP;
        font-weight: bold;
        @include adaptiv-font(14, 10); 
    }
    &__contact {
        @include adaptiv-font(14, 10); 
        font-family: $fontAP;
        font-weight: bold;
    }
}


</style>
