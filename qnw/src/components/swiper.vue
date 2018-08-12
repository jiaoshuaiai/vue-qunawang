<template>
    <div class="wrapper">
        <!--ref="mySwiper" @someSwiperEvent="callback"-->
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev">左</div>-->
            <!--<div class="swiper-button-next" slot="button-next">右</div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar">灰色滚动条</div>-->
        </swiper>
    </div>
</template>
<script>
//    import 'swiper/dist/css/swiper.css'
//    import {swiper,swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                    pagination: '.swiper-pagination',   //圆点
                    loop: true      //循环轮播
                },
                swiperList:[
                   {
                    id:'1',
                    imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3395251310,758981983&fm=27&gp=0.jpg'
                   },{
                    id:'2',
                    imgUrl:require('../assets/su/2.jpg')
                   },{
                    id:'3',
                    imgUrl:require('../assets/su/3.jpg')
                   },{
                    id:'4',
                    imgUrl:require('../assets/su/4.jpg')
                   }
                ]
            }
        },
        methods:{
            callback(){
                console.log('回调')
            }
        }
    }
</script>
<style lang="stylus" scoped>
    /*直接修改swiper 样式无效，是因为只针对当前组件修改，不对其他组件造成影响。
    因为样式在swiper 组件中
    需要在样式前面添加 父级类名 >>> 样式穿透，只要子组件中有对应类名，就改变颜色*/
    .wrapper >>> .swiper-pagination-bullet-active
     background: white
    .wrapper
     background:#333
     img
      width: 100%
      height: 55vw

</style>

<!--<style scoped>-->
    <!--.wrapper{-->
        <!--overflow: hidden;-->
        <!--width：100%-->
        <!--height: 0;-->
        <!--padding-bottom: 30%;-->
        <!--text-align: center;-->
    <!--}-->
    <!--img{-->
        <!--width: 100%;-->
        <!--height: 10rem;-->
    <!--}-->

<!--</style>-->