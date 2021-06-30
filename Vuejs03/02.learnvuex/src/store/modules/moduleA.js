export default {
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