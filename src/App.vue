<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view>
      <shop></shop>
    </router-view>
  </div>
</template>

<script>
import headerNav from '@/components/HeaderNav'
export default {
  name: 'App',
  components:{
    headerNav,
  }
}
</script>

<style>
</style>
