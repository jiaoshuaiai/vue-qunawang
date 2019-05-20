<template>
    <div class="main">
        <header class="header">
            <div class="header-one">
                <router-link :to="{path:'/',query:{city:city}}">
                    <p class="iconfont icon">&#xe624;</p>
                </router-link>
                <div class="areas">
                    <p class="area1" v-text="area1"></p>
                    <p class="area2" v-text="area2"></p>
                </div>
            </div>
            <div class="header-two">
                    <label class="header-label" style="touch-action: none;" for="search" @click="empty">请输入城市名或拼音</label>
                    <input id="input" v-model="inputValue" for="serach" class="header-input" type="text">
            </div>
        </header>
       <main>
         <section class="">
           <p class="headerCity">当前城市</p>
           <div class="labelDiv">
             <p class="labelP" @click="back(city)">{{city}}</p>
           </div>
         </section>
         <section class="">
           <p class="headerCity">热门城市</p>
           <div class="labelDiv">
             <p v-for="(item,index) in hotList" :key="index"
                class="labelP"
                @click="back(item)">
               {{item}}
             </p>
           </div>
         </section>
         <section class=" ">
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
             <p class="labelP1">上海</p>
             <p class="labelP1">上海</p>
             <p class="labelP1">上海</p>
           </div>


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


         </section>
       </main>


    </div>
</template>
<script>
  export default {
      name:"City",
      data () {
          return {
              city:this.$route.query.city ? this.$route.query.city :  '',
              area1:'境内',
              area2:'国际/地区',
              inputValue:'',
              hotList:['上海','北京','广州','深圳','郑州','武汉'],
          }
      },
      watch:{   //监听input 内容，判断是否隐藏提示文字
          Value(newValue,oldValue){
              /*console.log(newValue)
              console.log(oldValue)*/
              if(newValue){
                  document.querySelector('.header-label').style.display = 'none'
              }else{
                  document.querySelector('.header-label').style.display = 'block'
              }
          }
      },
      methods:{
          back(city){
            this.$router.push({path: '/',query:{city:city}})
            console.log(city)
          },
          empty () {  //点击label 文字，触发input焦点事件   ?????
            console.log('44')
              document.querySelector('#input').focus(function(){
              });
          }
      }

  }
</script>
<style lang="stylus" scoped>

    @import '~styles/shareFun.styl'
    @import '~styles/varibles.styl'
   .main
    touch-action: none;
    font-size: 1.2rem
    .header
     /*display: flex*/
     width: 100%
     line-height: 2.4rem
     padding: 0.5rem 0
     background: $bgColor
     .header-one
      padding: .5rem .5rem 1rem .5rem
      .icon
       color: #fff
       font-size: 2rem
       inline()
      a
       inline()
      .areas
       width: calc(100% - 2rem)
       font-size: 1.6rem
       inline()
       center()
       margin-left: -1rem
       .area1
        inline()
        border: 1px solid #fff
        border-radius: .3rem
        background: #fff
        width: 10rem
        color: #0e6f9b
       .area2
        inline()
        border: .5px solid #fff
        border-radius: .3rem
        width: 10rem
        margin-left: -.4rem
        color: #fff
     .header-two
      center()
       .header-label
        position: absolute
        z-index: 2
        left: 10rem
        font-size: 1.4rem
        top: 5rem
        color: $color
       .header-input
        border: none
        outline:none
        width: 98%
        border-radius: .2rem
        line-height: 2.6rem
        padding: 0.4rem 0 0.4rem 0
        text-align: center
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
