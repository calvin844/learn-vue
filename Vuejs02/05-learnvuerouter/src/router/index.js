// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import About from '../components/About'
// import Home from '../components/Home'
// import User from '../components/User'


// 路由懒加载写法，使用时才会加载对应组件及其中代码，从而加快页面加载速度
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1. 通过Vue.use（插件），安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter对象
const routes = [{
  // 设置默认值
  path: '',
  // redirect：重定向
  redirect: '/home'
}, {
  path: '/home',
  component: Home,
  meta: {
    title: '首页'
  },
  children: [{
      path: '',
      redirect: 'news'
    },
    {
      // 子路由不需要加'/'
      path: 'news',
      component: HomeNews
    },
    {
      path: 'message',
      component: HomeMessage
    }
  ]
}, {
  path: '/about',
  component: About,
  // 专享路由前置守卫
  beforeEnter: (to, from, next) => {
    // console.log('About  beforeEnter')
    next()
  },
  meta: {
    title: '关于'
  }
}, {
  // 配置动态路由
  path: '/user/:userId',
  component: User,
  meta: {
    title: '用户'
  }
}, {
  // 配置动态路由
  path: '/profile',
  component: Profile,
  meta: {
    title: '档案'
  }
}]


const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  // 统一修改激活标签样式名称
  linkActiveClass: 'active1'
})

// beforeEach修改页面标题，跳转前回调，也叫做前置守卫（guard)
router.beforeEach((to, from, next) => {
  // console.log('beforeEach')
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  // 必须调用next函数，不然不会进行下一步
  // 为空：执行下一步
  // false：改变URL不跳转
  // '路径'（'/login')：路径跳转
  next()
})

// afterEach修改页面标题，跳转后回调，也叫做后置钩子守卫（hook)
router.afterEach((to, from) => {
  // console.log('afterEach')
})

// 3. 将router对象传入Vue实例中
export default router
