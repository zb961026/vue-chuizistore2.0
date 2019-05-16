/* eslint-disable no-undef */
import Vue from 'vue' // 导入vue模块
import Router from 'vue-router' //  导入vue-router模块
import '@/assets/css/reset.css' // 引入所需要的所有样式表
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'
import '@/assets/css/prompt.css'
import '@/assets/css/item.css'
import '@/assets/css/cart.css'
import '@/assets/css/checkout.css'
import '@/assets/css/address-pop.css'
import '@/assets/css/footer.css'
import Shop from '@/views/Shop'
import Item from '@/views/item'
import Cart from '@/views/cart'
import CheckOut from '@/views/checkout'
Vue.use(Router) // 确定使用vue-router模块

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: Shop,
    component: Shop
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  }
  ]
})
