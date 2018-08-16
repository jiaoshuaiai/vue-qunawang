<template>
    <div class="d">
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
    import Header from './header'
    import Swiper from './swiper'
    import Icon from './icon'
    import Sell from './sell'
    import Weekend from './weekend'
    import axios from 'axios'
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

                axios.get('/api/index.json').then( (reqsuccess) =>{  //箭头函数this指向是最近的this
                        console.log(reqsuccess)
                    this.img = reqsuccess.data.swiperList[1].imgUrl
                    this.swiperList = reqsuccess.data.swiperList
                    this.iconList = reqsuccess.data.iconList
                    this.sellList = reqsuccess.data.sellList
                    this.weekendList = reqsuccess.data.weekendList
                    console.log(this.img)
                    console.log(this.swiperList)
                    console.log(this.iconList)
                    console.log(this.sellList)
                    console.log(this.weekendList)
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
  .d{
      margin-bottom: 100rem
  }
</style>