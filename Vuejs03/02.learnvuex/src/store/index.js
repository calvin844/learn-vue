import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA.js'
// 1. 安装插件
Vue.use(Vuex)


// 2. 创建对象
const state = {
  counter: 1000,
  students: [{
      id: 110,
      name: 'calvin',
      age: 18
    },
    {
      id: 111,
      name: 'kobe',
      age: 24
    },
    {
      id: 112,
      name: 'james',
      age: 30
    },
    {
      id: 113,
      name: 'curry',
      age: 12
    }
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})
export default store








// 对象的解构
const obj = {
  name: 'calvin',
  age: 18,
  hieght: 1.88,
  address: '广州'
}

// 赋值是按属性名赋值，不按顺序，如果没有使用到的属性，将不被取出
const {
  name,
  hieght,
  age
} = obj
console.log(name) //calvin
console.log(hieght) //1.88
console.log(age) //18
