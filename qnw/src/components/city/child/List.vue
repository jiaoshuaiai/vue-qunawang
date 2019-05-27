<template>
  <div class="list" ref="wrapper" style="color: #333">
    <div>
      <main class="content" v-if="!inputValue">
        <section>
          <p class="headerCity">当前城市</p>
          <div class="labelDiv">
            <p class="labelP" @click="back(city)">{{city}}</p>
          </div>
        </section>
        <!--{{qqqq}}-->
        <!--{{clickCity}}-->

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
          <div v-for="item in cityList" :key="item.id" :ref="item.alphabet">
            <p  class="headerCity">{{item.alphabet}}</p>
            <div class="labelDiv1">
              <p class="labelP1" v-for="it in item.data"  :key="it.id" @click="back(it.name)">{{it.name}}</p>
            </div>
          </div>
          <!--<div>
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
          </div>-->
        </section>
      </main>
      <div class="labelDiv1" v-if="searListLen > 0">
        <p class="labelP1" v-for="item of searList" @click="back(item)">{{item}}</p>
      </div>
      <div class="labelDiv1" v-if="inputValue && searListLen == 0">
        <p class="labelP1">没有找到匹配数据</p>
      </div>


    </div>

  </div>
</template>
<script>
    import VueEvent from './City'  //兄弟组件实例传参
    import BScroll from 'better-scroll'
    export default{
      name:'list',
      data(){
        return{
          city: this.$route.query.city ? this.$route.query.city :  '',
          qqqq:this.hahaObj ? this.hahaObj.hotCity : '' // jj
        }
      },
      props:{  //定义类型
        inputValue: String,
        clickCity: String,
        hahaObj: Object,
        hotCity: Array,
        cityList: Array,
        searList: Array,
        searListLen: Number,
      },
//      props:['clickCity','cityList','hotCity'],
      watch:{   // 根据传递的字母 让城市列表滚动到对应的字母元素上
        clickCity(newValue,oldValue){
          if(newValue){
            //获取城市列表的 DOM元素
            console.log(newValue)
            console.log(this.$refs[newValue])
            if(newValue){
              const element = this.$refs[newValue][0];
              this.scroll.scrollToElement(element); //滚动到对应的DOM上
            }

          }
        },
      },
      mounted(){
        /*  ref   用来获取DOM元素    初始化scroll 滚动*/
        this.scroll = new BScroll(this.$refs.wrapper);

        /*VueEvent.$on('blur',(msg)=>{    //通过实例进行的兄弟组件传参
          console.log(msg)
        })*/
      },
      methods:{
        back(city){
          this.$router.push({path: '/',query:{city:city}})
        }
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
   font-size: 1.4rem
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
   font-size: 1.4rem
 .labelP1
   padding: 1rem 0 1.5rem 0.8rem;
   border-bottom: 0.5px solid #cccccc;

</style>
