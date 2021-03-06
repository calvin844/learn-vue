import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 那么.vue文件中的template是由谁处理了？
// 由vue-template-compiler依赖插件处理了，所以不需要使用runtime-compiler
// 建议大部分人去使用runtime-compiler，是因为可能没有安装vue-template-compiler依赖插件