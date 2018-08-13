<template>
    <div class="d">
        <Header></Header>
        <Swiper></Swiper>
        <Icon></Icon>
    </div>
</template>
<script>
    import Header from './header'
    import Swiper from './swiper'
    import Icon from './icon'
    export default {
        name:'Home',
        components:{    //局部组件  需要在组件下面声明局部组件
            Header,       //es6中，键值一直，可以只写一个
            Swiper,
            Icon
        }
    }
</script>
<style scope>
  .d{
      margin-bottom: 100rem
  }
</style>