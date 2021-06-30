<template>
  <div id="app">
    <h2>------modules相关信息：</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncupdateName">异步修改名字</button>
    <h2>------</h2>



    <h2>------info相关信息：</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateinfo">修改信息</button>


    <h2>------{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="unadd">-</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>------getters相关信息：</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stulength}}</h2>
    <h2>{{$store.getters.moreAgeStu(13)}}</h2>
    <h2>{{$store.getters.moreAgeStu(2)}}</h2>


    <h2>------组件：</h2>
    <hello-vuex />
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/multations-types'
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是APP组件'
      }
    },
    // computed: {
    //   more20stu() {
    //     return this.$store.state.students.filter(s => s.age > 20)
    //   }
    // },
    methods: {
      add() {
        this.$store.commit(INCREMENT)
      },
      unadd() {
        this.$store.commit('deincrement')
      },
      addCounter(count) {
        // playload（负载）：携带mutations的参数
        // 1. 普通的提交风格
        // this.$store.commit('incrementCount',count)

        // 2.特殊的提交风格：提交的count参数是一个对象，不仅仅是一个数字
        this.$store.commit({
          type: 'incrementCount',
          count //提交后{type:'incrementCount',count:5}
        })
      },
      addStudent() {
        const student = {
          id: 115,
          name: 'aaa',
          age: 26
        }
        this.$store.commit('addStudent', student)
      },
      updateinfo() {
        // this.$store.commit('updateinfo')
        // this.$store.dispatch('aUpdateInfo','我是playload')
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是message',
        //   success: () => {
        //     console.log('执行成功！')
        //   }
        // })
        this.$store
          .dispatch('aUpdateInfo', '我是携带的信息')
          .then(res => {
            console.log(res)
            console.log('里面完成了')
          })
      },
      updateName(){
        this.$store.commit('updateName', 'abc')
      },
      asyncupdateName(){
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>
</style>
