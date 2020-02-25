<template>
  <div class="wrapper">
    <div id="newsDetail">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> 资讯详情
      </p>
      <!-- 新闻标题 -->
      <h2 v-text="newsTitle"></h2>
      <!-- 新闻详情 -->
      <div class="centent" v-html="newsDetail"></div>
      <!-- 路由传过来的资讯id -->
      <!-- <h3 style="text-align: center;">路由传参传递过来的新闻id：{{newsId}}</h3> -->
      <div class="other">
        <span>[行业资讯]关于XXXX的重要通知</span>
        <span>[行业资讯]关于XXXX的重要通知</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      newsId: "",
      newsTitle: "[行业资讯]关于XXXX的重要通知",
      newsDetail: `<p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p><p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p>`
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // 存储vue-router通过paramss传参传过来的资讯id
    this.newsId = this.$route.params.newsId;
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
    h2 {
      margin: 50px auto 20px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    div {
      width: 1150px;
      height: auto;
      margin: 30px auto;
    }
    .other {
      overflow: hidden;
      span {
        line-height: 50px;
        color: #606061;
        &:hover {
          color: #6390d1;
        }
        &:nth-child(1) {
          float: left;
          margin-left: 40px;
          &::before {
            content: "上一篇：";
          }
        }
        &:nth-child(2) {
          float: right;
          margin-right: 40px;
          &::before {
            content: "下一篇：";
          }
        }
      }
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
      h2 {
        margin: 20px auto 20px;
        font-size: 1.3em;
      }
      .other {
        span {
          display: block;
          text-align: center;
          line-height: 30px;
          overflow: hidden;
          &:nth-child(1) {
            float: none;
            margin-left: 0;
          }
          &:nth-child(2) {
            float: none;
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>