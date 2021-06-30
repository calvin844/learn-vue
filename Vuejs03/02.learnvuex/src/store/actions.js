export default {
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
}
