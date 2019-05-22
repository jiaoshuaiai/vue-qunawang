<template>
    <div class="div">
        <Header></Header>
        <Swiper :swiperList="swiperList"></Swiper>
        <Icon :iconList="iconList"></Icon>
        <Sell :sellList="sellList"></Sell>
        <Weekend :weekendList="weekendList"></Weekend>
        <img :src="img" alt="">
        <img src="../../../static/img/1.jpg" alt="">
        {{img}}

    </div>
</template>
<script>
    import Header from './child/Header'
    import Swiper from './child/Swiper'
    import Icon from './child/Icon'
    import Sell from './child/Sell'
    import Weekend from './child/Weekend'
//    import axios from 'axios'
    export default {
        name:'Home',
        data () {
            return {
                img: '',
                swiperList:[],
                iconList:[],
                sellList:[],
                weekendList:[]
            }
        },
        components:{    //局部组件  需要在组件下面声明局部组件
            Header,       //es6中，键值一直，可以只写一个
            Swiper,
            Icon,
            Sell,
            Weekend
        },
        mounted () {
             this.getHomeInfo()
        },
        methods: {
            getHomeInfo () {

                /*var self = this;
                axios.get('/api/index.json').then( function(reqsuccess){
                    //普通函数this 指向是上级函数.上级函数没有this.img.需要在函数外接收下

                     console.log(reqsuccess)    //可以获取数据，无法赋值。报错
                    self.img = reqsuccess.data.list[0].imgUrl
                     console.log(self.img + '---')
                 })*/
               // 页面直接import 引入axios.可以直接使用
//                axios.get('/api/index.json').then((res) =>{  //箭头函数this指向是最近的this
                this.$axios.get('/api/index.json').then((res) =>{    // 全局引入axios
                    this.img = res.data.swiperList[1].imgUrl
                    this.swiperList = res.data.swiperList
                    this.iconList = res.data.iconList
                    this.sellList = res.data.sellList
                    this.weekendList = res.data.weekendList
                })

//                axios.get('/api/index.json').then(this.abc)  //两种方式获取json  this指向问题
            },
//            abc(reqsuccess){
//                console.log(reqsuccess)
//                this.img = reqsuccess.data.list[1].imgUrl
//                console.log(this.img)
//            },




        }

    }
</script>
<style scoped>
  .div{
      margin-bottom: 100rem;
      font-size :1.5rem !important;
  }
</style>
