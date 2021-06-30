import axios from 'axios'
// 方法1：
// export function request(config,success,failure) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//   .then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

// 方法2：
// export function request(config) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseconfig)
//   .then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
// }

// 方法3：
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res=>{
//         resolve(res)
//       }).catch(err=>{
//         reject(err)
//       })
//   })
// }

// 方法4（推荐）：
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. axios拦截器(发送过程中添加操作)
  // 2.1. 请求拦截(请求发送过程中添加操作)
  instance.interceptors.request.use(config=>{
    // 什么时候需要使用axios请求拦截器：
    // 2.1.1. 比如config中的一些信息不符合服务器的要求

    // 2.1.2. 比如每次发送网络请求时，都希望在界面中显示一个请求图标

    // 2.1.3. 某些网络请求（比如登陆(需要携带token))，必须携带一些特殊的信息，发现没有时，返回跳转登陆页面
    // console.log(config);
    // 需要把config返回出去，不然拦截后，后续步骤拿不到config
    return config
  },err=>{})

  // 2.2. 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    // 需要把res(响应结果)返回出去，不然拦截后，后续步骤拿不到res，这里只有res里面的data有用，所以只把data返回出去
    return res.data
  },err=>{
    console.log(err)
  })
  return instance(config)
}
