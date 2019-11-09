/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 22:59:32
 * @LastEditTime: 2019-11-09 11:38:01
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import router from './router.js'
Vue.use(vueRouter) // 注册路由
import { Header} from 'mint-ui'
import '../lib/mui/css/mui.min.css'
Vue.component(Header.name,Header)
var vm = new Vue({
    el:'#app',
    render: c => c(App), // 只有render 函数才能渲染点Vue后缀的组建
    router //挂载路由
})