import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'
import '@/assets/css/prompt.css'
Vue.use(Router);
import Shop from '@/views/Shop'

export default new Router({
    routes:[
        {
            path:'/',
            name:Shop,
            component:Shop
        }
    ]
})