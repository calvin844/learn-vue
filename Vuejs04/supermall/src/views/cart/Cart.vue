<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // 方法1：使用默认名称
      // ...mapGetters(['cartLength', 'cartList'])

      // 方法2：使用自定义名称
      ...mapGetters({
        cLength: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
