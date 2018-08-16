
<!--先实现九宫格，然后希望可以根据图标的数量进行滑动。（超过8个）.图标数量用computed 计算属性进行了处理-->

<!--3-->

<template>
    <div>
        <ul class="icons">
            <swiper :options="swiperOption" >
                <swiper-slide v-for="(page,index) in pages" :key="index">

                    <li class="icon" v-for="item in page" :key="item.key">
                        <div class="icon-img">
                            <img class="icon-imgContent"  :src="item.imgUrl" alt="">
                        </div>
                        <p class="icon-text" v-text="item.name"></p>
                    </li>
                </swiper-slide>
                <!--<swiper-slide>-->
                    <!--<li class="icon" >-->
                        <!--<div class="icon-img">-->
                            <!--<img class="icon-imgContent"  src="../../assets/icon/8.png" alt="">-->
                        <!--</div>-->
                        <!--<p class="icon-text" >2222</p>-->
                    <!--</li>-->
                <!--</swiper-slide>-->

                <!--<div class="swiper-pagination"  slot="pagination"></div>-->
            </swiper>

        </ul>
    </div>
</template>
<script>
export default {
    name:'icon',
    data () {
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
//                pagination: '.icons .swiper-pagination',   //圆点
//                loop: true      //循环轮播
                autoplay: false
            }/*,
            list:[
                {
                    name:'景点门票秦莞尔阿斯蒂芬阿斯蒂芬',
                    imgUrl:require('../../assets/icon/1.png'),
                    key:'0'
                },
                {
                    name:'泡温泉',
                    imgUrl:require('../../assets/icon/2.png'),
                    key:'1'
                },
                {
                    name:'分界洲岛',
                    imgUrl:require('../../assets/icon/3.png'),
                    key:'2'
                },{
                    name:'一日游',
                    imgUrl:require('../../assets/icon/4.png'),
                    key:'3'
                },{
                    name:'必游清单',
                    imgUrl:require('../../assets/icon/5.png'),
                    key:'4'
                },{
                    name:'大小洞天',
                    imgUrl:require('../../assets/icon/6.png'),
                    key:'5'
                },{
                    name:'自然风光',
                    imgUrl:require('../../assets/icon/6.png'),
                    key:'6'
                },{
                    name:'全部',
                    imgUrl:require('../../assets/icon/7.png'),
                    key:'7'
                },{
                    name:'酒瓶',
                    imgUrl:require('../../assets/icon/8.png'),
                    key:'8'
                }
            ]*/
        }
    },
    computed:{    //计算属性，处理数据
        pages(){     //将数据以8个为单位分割。超过8个，分为两个数组
            const pages = [];
//            this.list.forEach((value,index) =>{    //本地数据
            this.iconList.forEach((value,index) =>{   //JSON
                const page = Math.floor(index / 8);
               if(!pages[page]){   //新数组项为undefined,给其默认值
                   pages[page] = []
               }
                pages[page].push(value);
            })
            return pages
        }
    },
    props:{
        iconList:{
            type:Array
        }
    }

}
</script>
<style lang="stylus" scoped>
    @import '~styles/textOverflow.styl'

   /*外层宽高比为2*/
   .icons
    overflow: hidden
    height:0
    padding-bottom: 50%
    margin-top: 1.04rem
    /*background: red*/
     /*内层宽高比为 1*/
    .icon
      position: relative
      float: left
      width: 25%
      /*解决高度溢出50%*/
      height: 0
      padding-bottom: 25%
      /*background: #9e9e9e*/
      overflow: hidden
      .icon-img
       position:absolute
       top: 0
       left: 0
       right: 0
       bottom: 2rem
       /*background: blue*/
       .icon-imgContent
        height: 100%
        display: block
        margin: 0 auto
      .icon-text
       /*margin-top: 8rem  隐藏两个，新增5个。明天解决*/
       text-align:center
       position: absolute
       left: 0
       right: 0
       bottom: 0
       height: 1.5rem

       ellipsis()


</style>