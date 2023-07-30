import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../App.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: AppVue
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition){
        if(to.hash){
            return{
                el: to.hash,
                top: 70,
                behavior: 'smooth',
            }
        }
        else{
            return { 
                behavior: 'smooth',
                top: 0 
            }
            
        }
    }
});

export default router;