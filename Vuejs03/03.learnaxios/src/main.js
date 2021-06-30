import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import {
  request
} from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   // console.log(res)
// })

// // 1. axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   // console.log(res)
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// // 2. axios发送并发请求
// axios.all([axios({
//     url: '/home/multidata'
//   }), axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })])
//   .then(axios.spread((res1, res2) => {
//     // 通过spread方法进行结果数组拆分，记住2个参数时，箭头函数小括号不能省略
//     console.log(res1)
//     console.log(res2)
//   }))

// 4. 创建对应的axios的实例，用于不同公共配置时创建单独配置
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL: 'http://222.111.22.152:8000',
//   timeout: 5000
// })

// instance2({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })


// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err)
// })


// request({
//   baseConfig:{},
//   success:function(res){},
//   failure:function(res){}
// })


request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
