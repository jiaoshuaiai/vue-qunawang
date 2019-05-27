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
  import List from './child/List.vue'
  import Alphabet from './child/Alphabet.vue'
  export default {
      name:"City",
      data () {
          return {
              cityChilid:this.$route.query.city ? this.$route.query.city :  '',
              area1: '境内',
              area2: '国际/地区',
              inputValue: '',
              hahaObj: {},
              searList: [],   //检索对应的显示列表
              searListLen: 0,   //检索对应的显示列表
              clickCity: '',   //点击字母列表
              hotCity: [],   //热门城市
              listAll: [],   // 城市列表
              alphabetList: []   //字母表
          }
      },
      components:{List,Alphabet},
      watch:{   //监听input 内容，检索城市
          inputValue(newValue,oldValue){
            if(newValue){
              console.log(newValue)
              let searList = [];
              let arr = '';
                for(let item of this.listAll){
                  arr = item.data;
                  for(let obj of arr){
                    if(obj.name.indexOf(newValue.toLowerCase()) != -1 || obj.spell.indexOf(newValue.toLowerCase()) != -1){
                        searList.push(obj.name);
                    }
                  }
                }
                this.searList = searList;
                this.searListLen = this.searList.length;
                console.log(searList)
            }else{
              this.searList = [];
              this.searListLen = 0;

            }
          }
      },
      created(){
        this.getData()
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
        cityFn(msg){  //父组件-中间组件传参
          this.clickCity = msg;
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
      width: 96%
      border-radius: .2rem
      line-height: 2.6rem
      padding: 0.4rem 0 0.4rem 0
      text-align: center
      font-size: 1.6rem
    .alphabet
      position: absolute
      top: 15rem
      right: 0
      text-align: center
    .ul li
      padding: 0.3rem 1rem
      list-style: none
      color: #03A9F4
      font-size: 1.6rem


</style>
