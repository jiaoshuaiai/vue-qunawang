<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <div>test</div>
    </div>
</template>
<script>
    import Header from './header'
    import Swiper from './swiper'
    export default {
        name:'Home',
        components:{    //局部组件  需要在组件下面声明局部组件
            Header,       //es6中，键值一直，可以只写一个
            Swiper
        }
    }
</script>
<style scope>

</style>