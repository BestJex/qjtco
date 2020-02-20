import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入iconfont字体库
import '@/assets/font/iconfont.css'
// 按需引入element-ui
import { Carousel, CarouselItem, Pagination } from "element-ui";
// 首页轮播图
Vue.use(Carousel);
Vue.use(CarouselItem);
// 分页器
Vue.use(Pagination);




// 版权声明及作者
console.log("©本站版权为青玖科技有限公司所有-未经许可不得盗用，违者将追究法律责任。This site copyright QING JIU Technology Corporation  all - without permission not to embezzle, offenders will beinvestigated for legal responsibility. ");
console.log("作者：赵旭 邮箱：zhao_xu_d@163.com  author：zhaoxu Email：zhao_xu_d@163.com");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
