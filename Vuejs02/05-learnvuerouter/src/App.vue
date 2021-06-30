<template>
  <div id="app">
    <!-- tag：指定渲染的标签 -->
    <!-- replace：不可返回 -->
    <!-- active-class：自定义当前激活标签class名称，需要统一修改时，可在router配置文件下修改 -->

    <!-- <router-link to="home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="about" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="home" tag="button" replace >首页</router-link>
    <router-link to="about" replace>关于</router-link> -->


    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-link :to="'/user/'+userId">用户中心</router-link>
    <router-link :to="{path:'/profile',query:{name:'calvin',age:18,height:1.87}}">档案</router-link>
    <button @click="userClick">用户中心</button>
    <button @click="profileClick">档案</button>
    <div>
      <img :src="imgUrl" width="100" />
    </div>
    <!-- keep-alive exclude对某些组件不进行缓存 -->
    <!-- keep-alive exclude内不能带有空格 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan',
        imgUrl: 'https://static.hdslb.com/mobile/img/512.png'
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路由
        // push：可返回，replace：不可返回
        // $router：大的router对象
        // this.$router.push('/home')
        this.$router.replace('/home')
      },
      aboutClick() {
        this.$router.replace('/about')
      },
      userClick(){
        this.$router.push('/user/'+this.userId)
      },
      profileClick(){
        this.$router.push({
          path:'/profile',
          query:{
            name:'kobe',
            age:19,
            height:1.87
          }
        })
      }
    }
  }
</script>

<style>
  .active {
    color: red
  }
</style>
