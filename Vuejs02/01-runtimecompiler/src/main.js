// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn = {
//   template: `<div>{{message}}</div>`,
//   data() {
//     return {
//       message: '我是组件message'
//     }
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: {
  //   cpn
  // },
  // components: { App },
  // template: '<App/>'
  render: function(createElement) {
    // 1.普通用法：createElement('标签',{标签的属性},['标签的内容'])
    // return createElement('h2',{class:'box'},['Hello World'])
    // return createElement('h2',
    // {class:'box'},
    // ['Hello World',createElement('button',['按钮'])])

    // 2.传入组件对象
    return createElement(App)
  }
})
// 可能是面试题
// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtime-only(v2)(1. 性能更高 2. 代码量更少)
// render -> vdom -> UI
