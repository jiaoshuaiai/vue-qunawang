// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'            // axios 请求
import fastClick from 'fastclick'    //移动端点击300ms 延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper'   //swiprer 插件
import BScroll from 'better-scroll'    //触摸滚动插件


import '@/assets/styles/reset.css'
import './assets/styles/1px.less'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body);     //将fastClick 自带的方法绑定到body中

Vue.use(VueAwesomeSwiper)
// Vue.use(BScroll)

Vue.prototype.$axios = axios



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,   //等同 router:router.es6写法。路由配置
    components: { App },  // es6写法，键值相同，写一个就可以。等同{App : App}。
    template: '<App/>'       //渲染局部组件App。导入进来的App
})
//  路由就是根据地址不同，返回给用户的内容不同  对应不同的组件
