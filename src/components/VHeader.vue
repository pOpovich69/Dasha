<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

const burger_active = ref(false);


const menu_list = [
    { 
        name: "про мене",
        block: "/#aboutme"
    },
    { 
        name: "мої роботи",
        block: "/#works"
    },
    { 
        name: "ціни",
        block: "/#price"
    },
    { 
        name: "контакти",
        block: "/#contacts"
    }
]
const reception_active = ref(false);
const reception = () => {
    reception_active.value = !reception_active.value;
    document.body.classList.toggle('lock');
}

const menu_burger = () =>{
    burger_active.value = !burger_active.value;
    document.body.classList.toggle('lock');
}

const push_to = (link) => {
    router.push(`${link}`);
}

</script>
<template>
<header class="header">
    <div class="header__row">
        <div class="header__logo"><RouterLink to="/">Dasha</RouterLink></div>
        <nav class="header__nav">
            <ul class="nav__list">
                <li v-for="item in menu_list"><RouterLink :to=(item.block) >{{ item.name }}</RouterLink></li>
            </ul>
        </nav>
        <div class="header__btn" @click="push_to('/#contacts')">
            <button>Записатись</button>
        </div>
        <div class="burger__btn" :class="{burger__btn_active: burger_active}" @click="menu_burger()"><span></span></div>
        <div class="burger__menu" :class="{burger__menu_active: burger_active}">
            <nav class="burger__nav">
                <ul class="burger__list">
                    <li v-for="item in menu_list"><RouterLink :to=(item.block) >{{ item.name }}</RouterLink></li>
                    <li class="header__btn">
                        <button>Записатись</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>
<style scoped lang="scss">
@import "../scss/variables.scss";
.header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 98;
    height: 70px;
    &__row{
        @extend %limiter;
        height: 70px;
        background-color: $colorHeader;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        max-width: 1040px;
    }
    &__logo {
        font-size: 40px;
    }
    &__btn {
        position: relative;
        z-index: 99;
        button{
            color: #fff;
            font-size: 19px;
            padding: 5px 25px;
            background-color: $colorBrown;
            border-radius: 7px;
            cursor: pointer;
            text-align: center;
            transition: all 300ms;
        }
        button:hover{
            box-shadow: 0px 0px 24px -4px rgba(160, 117, 100, 1);
        }
    }
}
.burger {
    &__btn {
        display: none;
    }
    &__menu {
        display: none;
    }
}
.nav {
    &__list {
        display: flex;
        li{
            font-size: 24px;
            margin: 0px 15px;
            cursor: pointer;
            padding: 5px;
            // background-image: linear-gradient(currentcolor,currentcolor);
            // background-position: 0% 95%;
            // background-repeat: no-repeat;
            // background-size: 0% 2px;
            transition: transform 300ms;
        }
        li:hover{
            // animation: underline 300ms ease;
            // background-size: 100% 2px;
            transform: scale(1.1);
        }
    }
}

// @keyframes underline{
//     0%{
//         background-size: 0% 2px;
//     }
//     100%{
//         background-size: 100% 2px;
//     }
// }

@media (max-width: 816px) {
    .header{
        &__nav{
            display: none;
        }
        &__btn{
            display: none;
        }
    }
    .burger {
        &__btn {
            display: block;
            position: relative;
            width: 30px;
            height: 18px;
            cursor: pointer;
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
            &_active{
                span{
                    transform: scale(0) translate(0px, -50%);

                }
                &::before{
                    transform: rotate(-45deg);
                    top: 8px;
                }
                &::after{
                    transform: rotate(45deg);
                    bottom: 8px;
                }
            }
        }
        &__menu {
            display: block;
            position: fixed;
            top: 0;
            left: 100%;
            z-index: -1;
            background-color: $colorBurger;
            width: calc(100%);
            height: calc(100vh);    
            transition: all 300ms;
            overflow: auto;
            &_active{
                left: 0;
            }
        }
        &__nav {
            height: 100%;
        }   
        &__list {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            li{
                font-size: 28px;
                padding: 5px;
                margin-bottom: 10px;
                &:last-child{
                    margin-bottom: 0px;
                }
            }
        }
    }
}
</style>

