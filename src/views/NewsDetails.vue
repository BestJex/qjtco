<template>
  <div class="wrapper">
    <div id="newsDetail">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> 资讯详情
      </p>
      <div v-html="newsDetail"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      newsId:"",
      newsDetail: `<h2 style="text-align: center;">微信发展史</h2> <p style="text-align: left; font-size: 15px;"> 微信（WeChat） [1]  是腾讯公司于2011年1月21日推出的一个为智能终端提供即时</p>`
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // 存储vue-router通过paramss传参传过来的资讯id
    this.newsId=this.$route.params.newsId;
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.wrapper {
  // 资讯详情
  #newsDetail {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    div {
      width: 1100px;
      height: auto;
      margin: 50px auto;
    }
  }
  @media screen and (max-width: 1200px) {
    #newsDetail {
      // 面包屑
      > p {
        width: 100%;
      }
      div {
        width: 93%;
        margin: 20px auto;
      }
    }
  }
}
</style>