<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
    
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    // 生命周期函数设置页面标题
    created() {
      console.log('档案created')
      document.title = "档案"
    },
    destroyed() {
      console.log('档案destroyed')
    }
  }
</script>

<style>
</style>
