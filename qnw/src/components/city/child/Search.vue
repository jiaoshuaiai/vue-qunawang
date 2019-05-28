<template>
  <div>
    <div class="header-two">
      <input id="input" v-model="inputValue" for="serach" class="header-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <!--另一种方法，直接使用检索城市覆盖城市列表-->
    <div style="display: none; z-index: 55;background: red;position: relative">
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
      <p>ddd</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        timeFlag:'',
        inputValue:'',
        searList:[],   //检索对应的城市列表
        searListlen:0  //检索对应的城市列表长度
      }
    },
    props:{cityList:Array},
    watch:{  //监听input 内容，检索城市,得到对应的城市列表
      inputValue(newValue,oldValue){
        if(this.timeFlag){
          console.log(this.timeFlag)
          clearTimeout(this.timeFlag)
        }
        this.timeFlag = setTimeout(()=>{
            if(newValue){
              console.log(newValue)
              let searList = [];
              let arr = '';
              for(let item of this.cityList){
                arr = item.data;
                for(let obj of arr){
                  if(obj.name.indexOf(newValue.toLowerCase()) != -1 || obj.spell.indexOf(newValue.toLowerCase()) != -1){
                    searList.push(obj.name);
                  }
                }
              }
              this.searList = searList;
              this.searListLen = this.searList.length;
              this.$emit('searFun',{value:this.inputValue,data:this.searList,len:this.searListLen})
            }else{
              this.searList = [];
              this.searListLen = 0;
              this.$emit('searFun',{value:'',data:[],len:0})
            }
        },100)
      }
    }
  }
</script>
<style lang="stylus" scoped>

  @import '~styles/shareFun.styl'
  @import '~styles/varibles.styl'

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
</style>
