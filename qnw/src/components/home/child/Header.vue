<template>
    <div>
        <header>
            <p class="header-left">
                <span class="iconfont" style="font-size: 2rem">&#xe624;</span></p>
            <p class="header-input">
                <span class="iconfont">&#xe632; </span>

                <input id="input" style="border: none;outline: none" type="text" placeholder="输入城市/景点/游玩主题">
            </p>
            <!--<router-link :to="{path:'/city',query:{city:city}}">-->
            <router-link to="/city">
                <p class="header-select">
                    <span class="location">{{city}}</span>
                    <span class="iconfont arrow-icon">&#xe6aa;</span>
                </p>
            </router-link>
        </header>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        name:'HomeHeader',
        data(){
            return{
//                city:this.$route.query.city ? this.$route.query.city : '城市'
//                city:this.$route.params.city ? this.$route.params.city : '城市'
//                city:this.$store.getters.getCityLen ?  this.$store.getters.getCityLen : ''   城市长度
            }
        },
        computed: {
          ...mapState(['city'])   //使用mapState 将state 中的city 直接映射到组件中，组件就可以直接使用city
        },
        /*computed:{   //不用定义 city，直接使用
          city(){
            console.log(this.$store.getters.getCity)
            return this.$store.getters.getCity
          }
        },*/
        methods:{
             search(){
//                 this.placeholder = ''
             }
        }
    }
</script>
<style lang="stylus" scoped>
    /* font-size = 62.5% 1rem = 1html*/

    /*样式引入样式需要添加@ 符号
      在css 中引入其他css 样式，如果想使用@ 符号或别名，需要在前面添加~
      arc/assets/styles 别名 styles*/
   /*@import '../assets/styles/varibles.styl'*/
   /*@import '~@/assets/styles/varibles.styl'*/
   @import '~styles/varibles.styl'


    header
     display: flex
     /*background: #18BFDA  通过变量定义的形式来使用样式*/
     background: $bgColor
     color: #fff
     font-size: 1.5rem
     padding: 0.6rem
     align-items: center
     .header-left
      width: 4rem
      /*float: left*/
     .header-input
      flex: 1
      background: #fff
      border-radius: .3rem
      color: #9e9e9e
      padding: .8rem .2rem .8rem .8rem
     .header-input span
      font-size: 1.2rem
     .header-select
      min-width: 6rem
      padding: 0.5rem
      float:right
      text-align: center
      color: #fff
      /*.location
        display: inline-block
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        width: 4rem*/
      .arrow-icon
        margin-left: -0.4rem
      /*input
        width: 100%
        border: none
        border-radius: .3rem
        padding: .2rem*/



</style>
<!--<style scoped>-->
    <!--/*.header{*/-->
        <!--/*width: 760px;*/-->
        <!--/*line-height: 86px;*/-->
    <!--/*}*/-->
    <!--header{-->
        <!--width: 100%;-->
        <!--background-color: #18BFDA;-->
        <!--line-height: 40px;-->
        <!--margin-top: -3px;-->
    <!--}-->
    <!--input,select{-->
        <!--border: 0;-->
    <!--}-->
    <!--p{-->
        <!--display: inline-block;-->
    <!--}-->
    <!--.header-left{-->
        <!--width: 10%;-->
        <!--color: white;-->


    <!--}-->
    <!--.header-input{-->
        <!--width: 77%;-->
    <!--}-->
    <!--input{-->
        <!--width: 100%-->
        <!--padding: 7px 0;-->
    <!--}-->

    <!--::-webkit-input-placeholder { /* WebKit browsers */-->
        <!--color:   #DAE2EA;-->
    <!--}-->
    <!--:-moz-placeholder { /* Mozilla Firefox 4 to 18 */-->
        <!--color:   #DAE2EA;-->
    <!--}-->
    <!--::-moz-placeholder { /* Mozilla Firefox 19+ */-->
        <!--color:   #DAE2EA;-->
    <!--}-->
    <!--:-ms-input-placeholder { /* Internet Explorer 10+ */-->
        <!--color:   #DAE2EA;-->
    <!--}-->
    <!--.header-select{-->
        <!--width: 10%;-->
    <!--}-->
    <!--select{-->
        <!--background-color: #18BFDA;-->
        <!--color: white;-->
    <!--}-->
<!--</style>-->
