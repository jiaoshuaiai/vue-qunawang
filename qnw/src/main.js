// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'



import './assets/styles/reset.css'

Vue.config.productionTip = false
fastClick.attach(document.body);     //将fastClick 自带的方法绑定到body中




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,   //等同 router:router.es6写法。路由配置
    components: { App },  // es6写法，键值相同，写一个就可以。等同{App : App}。
    template: '<App/>'       //渲染局部组件App。导入进来的App
})
//  路由就是根据网址不同，返回给用户的内容不同
