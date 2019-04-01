import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'
import '@/assets/css/prompt.css'
import '@/assets/css/item.css'
Vue.use(Router);
import Shop from '@/views/Shop'
import Item from '@/views/item'

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:Shop,
            component:Shop
        },
        {
            path:'/item',
            name:'Item',
            component:Item
        }
    ]
})