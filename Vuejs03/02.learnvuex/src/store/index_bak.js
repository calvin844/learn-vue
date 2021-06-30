import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './multations-types'
// 1. 安装插件
Vue.use(Vuex)
// 2. 创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, playload) {
      state.name = playload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    fullname3(state, getters, rootState) {
      // 模块中第三个参数rootState是根store里面定义的state
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      // 这个context代表moduleA对象
      console.log(context)
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)

    }
  }
}

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    //定义方法
    // 数组方式定义方法名称
    // 官方推荐把方法名字都抽成常量定义，以避免手误
    [INCREMENT](state) {
      state.counter++
    },
    deincrement(state) {
      state.counter--
    },
    incrementCount(state, playload) {
      state.counter += playload.count
    },
    addStudent(state, student) {
      state.students.push(student)
    },
    updateinfo(state) {
      // state.info.name = 'coderwhy'
      // 能修改对象属性，但是不是响应式的，界面不会发生相应变化
      // state.info['address'] = '洛杉矶'

      // 通过vue的set方法是响应式的
      // Vue.set(state.info,'address','洛杉矶');

      // 删除对象中的属性，不是响应式
      // delete state.info.age
      // 通过vue的delete方法是响应式的
      // Vue.delete(state.info, 'age')

      // 异步操作的话，使用devtools工具调试时，无法跟踪调试
      // setTimeout(()=>{state.info.name = 'coderwhy'},1000)

      state.info.name = 'coderwhy'
    }
  },
  actions: {
    // context：上下文，这里是指store对面
    // aUpdateInfo(context,playload){
    //   setTimeout(()=>{
    //     console.log(playload.message)
    //     context.commit('updateinfo')
    //     playload.success()
    //     // 进行回调表示执行成功
    //   },1000)
    // }

    aUpdateInfo(context, playload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(playload)
          context.commit('updateinfo')
          // 这里的resolve调用的是外面dispatch调用时的then
          resolve('11111')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stulength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
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
