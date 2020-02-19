<template>
  <div id="app">
    <!-- 顶部导航组件 -->
    <Nav></Nav>
    <router-view />
    <!-- 底部联系方式及版权信息 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="less">
div, p, ul, li, ol, dl, dt, dd, span, strong, em, i, b, img, form, h1, h2, h3, h4, h5, h6, input, fieldset, legend, optgroup, select, table, textarea,
blockquote {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font: 1em/1 Helvetica, Tahoma, "Microsoft YaHei", "微软雅黑",
    \5fae\8f6f\96c5\9ed1, Arial, STXihei, "华文细黑", SimSun, "宋体", Heiti,
    "黑体", sans-serif;
}
img {
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  width: auto;
  height: auto;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a {
  transition: color 0.5s;
  -moz-transition: color 0.5s;
  -webkit-transition: color 0.5s;
  -o-transition: color 0.5s;
}
</style>
