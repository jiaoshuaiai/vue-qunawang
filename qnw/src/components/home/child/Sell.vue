<template>
    <div>
        <div class="hint">
            <p class="p1">定位失败</p>
            <p class="p2">5折泡温泉</p>
        </div>
        <h3 class="h3">热销推荐</h3>
        <ul class="ul">
            <!--vux-1px-b 为什么分隔出现-->
            <li v-for="item in dispose" :key="item.id" class="li vux-1px-b">
                <img class="li-img" :src="item.imgUrl" alt="">
                <div class="li-content">
                    <h5 class="h5" v-text="item.title"></h5>
                    <h6 class="h6" style="color: rgba(51, 51, 51, 0.5);" v-text="item.content"></h6>
                    <p class="price">
                        <strong style="color: red;font-size: 1.1rem;" v-text="item.price"></strong>
                        起
                    </p>
                </div>

            </li>
        </ul>
        <p style="text-align: center">
            <strong class="link">查看所有产品</strong>
        </p>
    </div>
</template>
<script>
    export default {
        name:'sell',
        data () {
            return {
               /* list: [    改用JSON
                    {
                        id: '1',
                        imgUrl:require('../../assets/su/5.jpg'),
                        title: '大连圣亚海洋世界',
                        content: '浪漫大连首站，浪漫的海洋主题乐园',
                        price: '99'
                    },{
                        id: '2',
                        imgUrl:require('../../assets/su/6.jpg'),
                        title: '大连圣亚海洋世界',
                        content: '浪漫大连首站，浪漫的海洋主题乐园',
                        price: '99'
                    },{
                        id: '3',
                        imgUrl:require('../../assets/su/7.jpg'),
                        title: '大连圣亚海洋世界',
                        content: '浪漫大连首站，浪漫的海洋主题乐园',
                        price: '99'
                    },{
                        id: '4',
                        imgUrl:require('../../assets/su/8.jpg'),
                        title: '大连圣亚海洋世界',
                        content: '浪漫大连首站，浪漫的海洋主题乐园',
                        price: '99'
                    },{
                        id: '5',
                        imgUrl:require('../../assets/su/9.jpg'),
                        title: '大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界',
                        content: '浪漫大连首站，浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园浪漫的海洋主题乐园',
                        price: '99'
                    }
                ]*/
            }
        },
        computed:{
            dispose (){
//                const listArr  = this.list   使用JSON
                const listArr  = this.sellList
                listArr.forEach( (value,index) =>{
                    value.price = '￥' + value.price;
                })
                return listArr
            }
        },
        props:{
            sellList:{
                type:Array
            }
        }

    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import "~styles/shareFun.styl"
   .hint
    display: flex
    text-align: center
    line-height: 3rem
    background: #8bc34a
    .p1,.p2
     flex: 1
    .p1
     border-right: 1px solid #9e9e9e
   .h3
    hTitle()
   .li
    display: flex
    overflow: hidden
    margin-left: .5rem
    padding:  .5rem .5rem .5rem 0
    /*border-bottom: 0.005rem solid #e6e6e6*/
    .li-img
      width: 9rem
      height: 6rem
    .li-content
     flex: 1
     margin-left: .5rem
     /*让显示...的时候发现并没有出现预期效果，给内容一个最小宽度，就可以显示出来了.因为要有一个固定宽度才可以显示...  ，或者 overflow:hidden*/
     /*min-width: 0*/
     overflow: hidden
     .h5,.h6
      margin-bottom: .5rem
      font-weight: 500
      ellipsis()
    .h5
     font-size: 1.6rem
     padding-top: 0.2rem
     padding-bottom: 0.2rem
    .h6
     font-size: 1.3rem
   .link
     display: inline-block
     line-height: 2.4rem
     font-size: 1.2rem
     color: #18bfda
     margin: 0.5rem
</style>
