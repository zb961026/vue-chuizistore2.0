<template>
  <div id="app">
    <!-- 使用header组件 -->
    <header-nav></header-nav>
    <!-- 使用路由视图 -->
    <router-view>
      <shop></shop>
    </router-view>
    <!-- 使用footer组件 -->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerNav from '@/components/HeaderNav' // 引入header组件
import footerNav from '@/components/FooterNav' // 引入footer组件
export default { // 暴露模块
  name: 'App',
  components:{
    headerNav, // 注册header组件
    footerNav // 注册footer组件
  }
}
</script>

<style>
</style>
