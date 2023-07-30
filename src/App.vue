<script setup>
import VHeader from './components/VHeader.vue';
import FullScreen from './components/FullScreen.vue';
import AboutMe from './components/AboutMe.vue';
import VSlider from './components/VSlider.vue';
import Price from './components/Price.vue';
import Contacts from './components/Contacts.vue';
import VFooter from './components/VFooter.vue';

</script>

<template>
<VHeader/>
<main class="main">
    <FullScreen/>
    <AboutMe id="aboutme"/>
    <VSlider id="works"/>
    <Price id="price"/>
    <Contacts id="contacts"/>
</main>
<VFooter/>
</template>

<style scoped lang="scss">
.main{
    position: relative;
    padding-top: 70px;
    height: calc(100% - 70px);
}
</style>
