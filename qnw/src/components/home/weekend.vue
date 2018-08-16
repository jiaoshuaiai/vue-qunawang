<template>
    <div>
       <h3>周末去哪</h3>
        <ul>
            <!--<li v-for="item in list" :key="item.id">-->
            <li v-for="item in weekendList" :key="item.id">
                <img class="li-img" :src="item.imgUrl" alt="">
                <div class="li-content">
                    <h5 class="li-h5" v-text="item.title"></h5>
                    <p class="li-p" v-text="item.content"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'weekend',
        data () {
            return {
                /*list:[   改用JSON
                    {
                        id: '1',
                        imgUrl: 'https://inews.gtimg.com/newsapp_match/0/4819230610/0',
                        title: '温泉有水上乐园',
                        content: '泡泡温泉，吹吹海风，深觉人生美好'
                    },{
                        id: '2',
                        imgUrl: require('../../assets/su/3.jpg'),
                        title: '温泉有水上乐园',
                        content: '泡泡温泉，吹吹海风，深觉人生美好'
                    },{
                        id: '3',
                        imgUrl: require('../../assets/su/9.jpg'),
                        title: '温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园温泉有水上乐园',
                        content: '泡泡温泉，吹吹海风，深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好深觉人生美好'
                    }
                ]*/
            }
        },
        props:{
            weekendList:{
                type:Array
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "~styles/textOverflow.styl"
    h3
     hTitle()
    .li-img
     width:100%
     height:20vw
    .li-content
     margin: .8rem
     .li-h5
      ellipsis()
     .li-p
      margin: .5rem 0
      ellipsis()


</style>