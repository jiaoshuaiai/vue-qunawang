<template>
    <div class="main">
        <header class="header">
            <div class="header-one">
                <router-link :to="{path:'/',query:{city:cityChilid}}">
                    <p class="iconfont icon">&#xe624;</p>
                </router-link>
                <div class="areas">
                    <p class="area1" v-text="area1"></p>
                    <p class="area2" v-text="area2"></p>
                </div>
            </div>
            <div class="header-two">
                    <input id="input" v-model="inputValue" for="serach" class="header-input" type="text" placeholder="请输入城市名或拼音">
            </div>
        </header>

      <!-- <main>
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
             <p class="labelP1">上海666</p>
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
       </main>-->

      <List :searchCity="seaCity"></List>
    </div>
</template>
<script>
  import List from './child/list.vue'
  export default {
      name:"City",
      data () {
          return {
              cityChilid:this.$route.query.city ? this.$route.query.city :  '',
              area1:'境内',
              area2:'国际/地区',
              inputValue:'',
              seaCity: '',
          }
      },
      components:{List},
      watch:{   //监听input 内容，判断是否隐藏提示文字
          inputValue(newValue,oldValue){
            if(newValue != oldValue){
                this.seaCity = newValue;
                console.log(this.seaCity);
            }
          }
      },
      methods:{
          empty () {  //点击label 文字，触发input焦点事件
//            input 直接点击是可以输入文字的，但是点击上面的label文字，是不会触发input焦点的，所以要将焦点手动调用
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
     .header-input
      border: none
      outline:none
      width: 98%
      border-radius: .2rem
      line-height: 2.6rem
      padding: 0.4rem 0 0.4rem 0
      text-align: center
      font-size: 1.6rem

</style>
