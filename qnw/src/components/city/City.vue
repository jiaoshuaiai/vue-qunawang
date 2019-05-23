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
        :searchCity="seaCity"
        :hahaObj="hahaObj"
        :hotCity="hotCity"
        :cityList="listAll">

      </List>

      <section class="alphabet">
        <ul class="ul">
          <li @click="alph" v-for="(name,index) in alphabetList" :key="index">{{name}}</li>
        </ul>
      </section>
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
              hahaObj:{},
              seaCity: '',   //搜索字段
              hotCity:[],   //热门城市
              listAll:[],   // 城市列表
              alphabetList:[]   //字母表
          }
      },
      components:{List},
      watch:{   //监听input 内容，检索城市
          inputValue(newValue,oldValue){
            if(newValue != oldValue){
                this.seaCity = newValue;
                console.log(this.seaCity);
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
                this.hahaObj = list
                this.hotCity = list.hotCity;  //直接传参对象初始为空，会报错，要做判空处理
                this.listAll = list.cityAll;

                let cityAll = list.cityAll;
                for(let k of cityAll){
                  this.alphabetList.push(k.alphabet)
                }
                console.log(this.alphabetList)
              }
            })
        },
        empty () {  //点击label 文字，触发input焦点事件
//            input 直接点击是可以输入文字的，但是点击上面的label文字，是不会触发input焦点的，所以要将焦点手动调用
          document.querySelector('#input').focus(function(){
          });
        },
        alph(event){
          console.log('55')
//            console.log(event)
          console.log(event.target.innerText)
          this.seaCity = event.target.innerText;
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
