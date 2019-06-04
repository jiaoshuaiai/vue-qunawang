<template>
    <div class="main">
        <header class="header">
            <div class="header-one">
                <!--<router-link :to="{name: 'home',params:{city:city}}">-->
                <router-link :to="{name: 'home'}">
                    <p class="iconfont icon">&#xe624;</p>
                </router-link>
                <div class="areas">
                    <p class="area1" v-text="area1"></p>
                    <p class="area2" v-text="area2"></p>
                </div>
            </div>
            <!--<div class="header-two">
                    <input id="input" v-model="inputValue" for="serach" class="header-input" type="text" placeholder="请输入城市名或拼音">
            </div>-->
            <Search
              @searFun="searFun"
              :cityList="listAll">
              检索框
            </Search>
        </header>

      <List
        :clickCity="clickCity"
        :hahaObj="hahaObj"
        :searList="searList"
        :searListLen="searListLen"
        :inputValue="inputValue"
        :hotCity="hotCity"
        :cityList="listAll">
          城市列表
      </List>

      <Alphabet
        :alphabetList="alphabetList"
        :inputValue="inputValue"
        @cityFun="cityFn">
        字母表
      </Alphabet>

    </div>
</template>
<script>
  import Search from './child/Search.vue'
  import List from './child/List.vue'
  import Alphabet from './child/Alphabet.vue'
  export default {
      name:"City",
      data () {
          return {
//              city:this.$route.query.city ? this.$route.query.city :  '',
              area1: '境内',
              area2: '国际/地区',
              inputValue: '',
              hahaObj: {},
              searList: [],   //检索对应的城市列表
              searListLen: 0,   //检索对应的城市列表长度
              clickCity: '',   //点击字母列表
              hotCity: [],   //热门城市
              listAll: [],   // 城市列表
              alphabetList: []   //字母表
          }
      },
      components:{Search,List,Alphabet},
      created(){
        this.getData();
      },
      methods:{
        getData(){
            this.$axios.get('/api/city.json').then((res)=>{
              let data = res.data;
              if(data.status == 'success' && data.data){
                let list = data.data;
                this.hahaObj = list;
                this.hotCity = list.hotCity;
                this.listAll = list.cityAll;

                let cityAll = list.cityAll;
                for(let k of cityAll){
                  this.alphabetList.push(k.alphabet)
                }
              }
            })
        },
        cityFn(msg){  //父组件-中间组件传参   字母表
          this.clickCity = msg;
        },
        searFun(msg){  //检索
          console.log(msg)
          this.inputValue = msg.value;
          this.searList = msg.data;
          this.searListLen = msg.len;
          console.log(this.searListLen)
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

</style>
