<template>
  <div class="list" ref="wrapper">
    <main class="content">
      <section>
        <p class="headerCity">当前城市</p>
        <div class="labelDiv">
          <p class="labelP" @click="back(city)">{{city}}</p>
        </div>
      </section>
      <!--{{qqqq}}-->

      <section>
        <p class="headerCity">热门城市</p>
        <div class="labelDiv">
          <p v-for="item in hotCity" :key="item.id"
             class="labelP"
             @click="back(item.name)">
            {{item.name}}
          </p>
        </div>
      </section>
      <section>
        <div class="area" v-for="item in cityList" :key="item.id">
          <p  class="headerCity">{{item.alphabet}}</p>
          <div class="labelDiv1">
            <p class="labelP1" v-for="it in item.data"  :key="it.id" @click="back(it.name)">{{it.name}}</p>
          </div>
        </div>
        <!--<div class="area">
          <p class="headerCity">A</p>
          <div class="labelDiv1">
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海666</p>
            <p class="labelP1">上海</p>
            <p class="labelP1">上海</p>
          </div>
        </div>
        <div class="area">
          <p class="headerCity">B</p>
          <div class="labelDiv1">
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
            <p class="labelP1">北京</p>
          </div>
        </div>-->
      </section>
    </main>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default{
      name:'list',
      data(){
        return{
          city: this.$route.query.city ? this.$route.query.city :  '',
          qqqq:this.hahaObj ? this.hahaObj.hotCity : '' // jj
        }
      },
      props:{
        searchCity: String,
        hahaObj: Object,
        hotCity: Array,
        cityList: Array
      },
//      props:['searchCity','cityList','hotCity'],
      mounted(){
//        ref   用来获取dom    初始化scroll 滚动
        this.scroll = new BScroll(this.$refs.wrapper)
      },
      methods:{
        back(city){
          this.$router.push({path: '/',query:{city:city}})
        },
      }
    }
</script>
<style lang="stylus">
 @import "~styles/shareFun.styl"
 @import "~styles/varibles.styl"
 .list
   position: absolute
   top: 8.5rem
   left: 0
   right: 0
   bottom: 0
   overflow: hidden

 .headerCity
   background: $bgColor1
   font-size: 1.4rem
   padding: 0.8rem 0
   paddingCity()
 .labelDiv
   background: white
   font-size: 1.6rem
   padding-bottom: 1rem
   paddingCity()
 .labelP
   border: 1px solid #9e9e9ef0
   width: 25%
   padding: 0.5rem
   text-align: center
   border-radius: 5px
   margin-top: 1rem
   margin-right: 0.6rem
   inline()
 .labelDiv1
   background: white
   font-size: 1.6rem
 .labelP1
   padding: 1rem 0 1.5rem 0.8rem;
   border-bottom: 0.5px solid #cccccc;

</style>
