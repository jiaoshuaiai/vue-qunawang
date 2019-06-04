/**
 * Created by jiaoshuai on 2019/6/3.
 */


import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

//全局访问的state 对象
const state = {
  // this.$store.state.city 获取或定义city  值 ；不是最理想的获取方式
  city : '城市1'
}

// 实时监听state 的变化   最合适的获取方式
const getters = {
  // this.getters.getCity
  getCity(){
    return state.city
  }
}

// 放改变state 初始值的方法    同步
const mutations = {
  //this.$store.commit('city','上海')  组件调用
  city(state,newCity){
    state.city = newCity;
  }
}

// 异步触发 mutations 中方法    最好异步改变
const actions = {
  //context 与 store 实例有相同的方法和属性，
  // this.$store.dispatch('acCity','开封')
  acCity(context,newCity){
      context.commit('city',newCity)
  }
}



// ，导出


// 创建vuex实例
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
