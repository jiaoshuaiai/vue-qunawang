<template>
    <div>
        <ul class="icons">

            <!--<li class="icon">-->
                <!--<div class="icon-img">-->
                    <!--<img class="icon-imgContent" src="@/assets/icon/1.png" alt="">-->
                <!--</div>-->
            <!--<p class="icon-text">aaaa</p>-->
            <!--</li>-->
            <li class="icon" v-for="item in list" :key="item.key">
                <div class="icon-img">
                    <img class="icon-imgContent"  :src="item.imgUrl" alt="">
                </div>
                <p class="icon-text" v-text="item.name"></p>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    name:'icon',
    data () {
        return {
            list:[
                {
                    name:'景点门票',
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
                }
             ]
        }
    }

}
</script>
<style lang="stylus" scoped>
   /*外层宽高比为2*/
   .icons
    overflow: hidden
    height:0
    padding-bottom: 50%
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
       margin-top: 8rem
       text-align:center

</style>