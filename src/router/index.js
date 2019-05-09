import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'
import '@/assets/css/prompt.css'
import '@/assets/css/item.css'
import '@/assets/css/cart.css'
import '@/assets/css/footer.css'
import Shop from '@/views/Shop'
import Item from '@/views/item'
import Cart from '@/views/cart'
Vue.use(Router)

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
  }
  ]
})
