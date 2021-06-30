<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，呵呵</p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    // 生命周期函数设置页面标题
    created() {
      console.log('关于created')
      document.title = "关于"
    },
    destroyed() {
      console.log('关于destroyed')
    }
  }
</script>

<style>
</style>
