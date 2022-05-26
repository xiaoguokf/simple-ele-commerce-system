import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'
// import Vuex from 'vuex'
import store from './store'  // 如果目录下面没写文件，就默认找index如果没有就会报错  
Vue.config.productionTip = false
Vue.prototype.$axios=Axios

Vue.use(VueRouter);
// Vue.use(Vuex);  //这一句要在创建store之前执行，所以不能写在这里，写在创建store之前的位置（在store文件夹里面）

new Vue({
  render: h => h(App),
  store:store,
  router:router,
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
