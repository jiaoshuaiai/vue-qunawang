<template>
    <div>
            <Header></Header>
    </div>
</template>
<script>
    import Header from './header'
    export default {
        name:'Home',
        components:{    //局部组件  需要在组件下面声明局部组件
            Header       //es6中，键值一直，可以只写一个
        }
    }
</script>
<style scope>

</style>