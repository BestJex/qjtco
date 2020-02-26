<template>
  <div class="wrapper">
    <div id="accountBodyer">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> 公众号定制
      </p>
      <div>
        <img src="https://www.qjtco.com/assets/image/account.jpg" alt="微信公众号,订阅号,服务号,企业号,定制开发,专业团队,设计,创意,文案,推广,运营" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title:
      "公众号定制-青玖科技-微信公众号-订阅号-服务号-企业号-定制开发-专业团队-设计-创意-文案-推广-运营",
    meta: [
      {
        name: "keywords",
        content:
          "微信公众号,订阅号,服务号,企业号,定制开发,专业团队,设计,创意,文案,推广,运营"
      },
      {
        name: "description",
        content:
          "青玖科技有限公司致力于创新开发简洁高效互联网产品,拥有十年从业经验的专业技术团队能够为客户提供小程序、公众号、网站定制开发、运维推广、服务器部署、软件运维推广、新媒体运营、企业营销等服务。在青玖科技，我们坚信对社会负责是我们商业模式的一部分。自公司创立至今，一直致力于支持和参与符合我们核心价值观和使命的公益和社会责任项目，以科技赋能公益事业，助力社会的发展。青玖科技一站式服务平台期待您的到来"
      }
    ]
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #accountBodyer {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    div {
      width: 1200px;
      margin: 10px auto 50px;
    }
  }

  @media screen and(max-width:1200px) {
    #accountBodyer {
      div {
        width: 93%;
        margin: 10px auto 20px;
      }
    }
  }
}
</style>