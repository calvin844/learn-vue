import {
  INCREMENT
} from './multations-types'

export default {
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
}
