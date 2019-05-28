<template>
  <!--<div style="background: red;margin: 1rem;position: absolute;z-index: 999;">
    <p  @click="dd">qqqqqqqq</p>
  </div>-->

  <div>
      <section class="alphabet" ref="alphabet" v-if="!inputValue">
        <ul class="ul">
          <li
              v-for="(name,index) in alphabetList"
              :key="index"
              :ref="name"
              @touchmove="handleTouchmove"
              @click="alphabetClick">{{name}}
          </li>
        </ul>
      </section>
  </div>
</template>
<script>
  import VueEvent from './City' //兄弟组件实例传参
  export default{
    data(){
      return{
        offsetT:'',
        timeFlag:''
      }
    },
    props:{
      alphabetList: Array,
      inputValue: String
    },
    updated(){  //初次进入时， alphabetList 为空，只有json接口调用成功之后，才会存在数据，使用 updated数据更新后 生命周期 获取高度，最合适
      if(!this.inputValue){       // 输入框有内容，字母表隐藏，不获取 高度
        //字母表 A 距离顶部的高度  此处为定位后距离（搜索框）的高度
        this.offsetT = this.$refs.alphabet.offsetTop;
      }
    },
    methods:{
      /*dd(){
        VueEvent.$emit('blur','xiongdizujian');   //触发兄弟组件事件
      },*/
      alphabetClick(event){
        /*通过父组件作为中间件，来进行兄弟组件通信*/
        this.$emit('cityFun',event.target.innerText)
      },
      handleTouchmove(event){
//        console.log(event.touches[0])
        /*获取第一个字母元素距离顶部的高度，然后使用触摸目标在视图顶部的高度，获取插值，除去每个字母元素的高度，就可以获得当前滑动到的字母元素*/

        if(this.timeFlag){   //优化性能，减少加载频率，延迟16ms
          clearTimeout(this.timeFlag)
        }
        this.timeFlag = setTimeout(()=>{
            const touchY = event.touches[0].clientY;    //当前滑动距离视图顶部的高度
            const index =  Math.floor((touchY - this.offsetT) / 22);
            if(index >= 0 && index < this.alphabetList.length ){ //限制index
              const element = this.alphabetList[index];
              this.$emit('cityFun',element);
            }
        },16)

      }

    }

  }
</script>
<style lang="stylus">
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
