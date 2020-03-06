import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入iconfont字体库
import '@/assets/font/iconfont.css'
// 按需引入element-ui
import { Carousel, CarouselItem, Pagination } from "element-ui";
// 首页element-ui轮播图
Vue.use(Carousel);
Vue.use(CarouselItem);
// 行业资讯element-ui分页器
Vue.use(Pagination);
// 引入vue-meta-info用于动态设置网页meta
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 引入VueLazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//把axios作为Vue的原型属性
Vue.prototype.$axios = axios;
// axios默认配置
axios.defaults.baseURL = 'http://127.0.0.1:3000'; //设置axios默认baseURL
axios.defaults.timeout = 5000;//设置请求超时时间



// 版权声明及作者
console.log("©本站版权为青玖科技有限公司所有-未经许可不得盗用，违者将追究法律责任。This site copyright QING JIU Technology Corporation  all - without permission not to embezzle, offenders will beinvestigated for legal responsibility. ");
console.log("作者：赵旭 邮箱：zhao_xu_d@163.com  author：zhaoxu Email：zhao_xu_d@163.com");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // seo优化预渲染
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
