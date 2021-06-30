<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        path: '/home/news'
      }
    },
    // 生命周期函数设置页面标题
    created() {
      console.log('首页created')
    },
    destroyed() {
      console.log('首页destroyed')
    },
    // activated，deactivated：这2个函数，只有该组件被保持了状态使用了keep-alive时才有效
    activated() {
      if (this.path != '/home/news') {
        this.$router.push(this.path)
      }
    },
    deactivated() {
      
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>

<style>
</style>
