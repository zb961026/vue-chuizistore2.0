<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view>
      <shop></shop>
    </router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerNav from '@/components/HeaderNav'
import footerNav from '@/components/FooterNav'
export default {
  name: 'App',
  components:{
    headerNav,
    footerNav
  }
}
</script>

<style>
</style>
