<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed:{
      userId(){
        // $route：当前活跃路由对象
        return this.$route.params.userId
      }
    },
    methods:{
      btnClick(){
        console.log(this.$router)
        console.log(this.$route)
      }
    },
    // 生命周期函数设置页面标题
    created() {
      console.log('用户created')
      document.title = "用户"
    },
    destroyed() {
      console.log('用户destroyed')
    }
  }
</script>

<style>
</style>
