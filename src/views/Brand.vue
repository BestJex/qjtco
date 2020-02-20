<template>
  <div class="wrapper">
    <div id="brandBodyer">
      <div class="qjtcoBrand">
        <img :src="brand.img" alt="青玖科技有限公司专属品牌" />
      </div>
      <h2 v-text="brand.title">青玖科技有限公司专属品牌</h2>
      <ul>
        <li v-for="(item,index) in brand.content" v-text="item" :key="index"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: {
        img: "https://www.qjtco.com/assets/image/TopServer.png",
        title: "青玖科技有限公司专属品牌",
        content: [
          "TopServer 由9个英文字符组成。",
          "寓意：依托青玖科技一站式服务平台为客户提供顶级服务（顶级技术服务、顶级产品TopNav和TopKit、顶级售后服务）。",
          "青玖科技有限公司是一家技术型公司，拥有专业的技术团队，能够提供微信公众号、小程序、网站、APP等各类定制开发服务。",
          "本公司郑重承诺凡本公司开发项目首年赠品牌服务器（阿里云、腾讯云等）和.com国际域名，赠送大品牌服务器质量有保证，避免因伪劣供应商造成客户利益损害；",
          "本公司郑重承诺凡本公司开发产品免费提供自交付之日起为期3个月（APP为期1年）的运营服务，并免费为客户指定工作人员进行系统使用方法的培训。"
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #brandBodyer {
    .qjtcoBrand {
      margin: 20px auto;
      width: 800px;
      height: auto;
      img {
        width: 100%;
      }
    }
    h2 {
      text-align: center;
      margin: 40px auto;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    ul {
      width: 1200px;
      margin: 30px auto;
      line-height: 40px;
      list-style: inside;
    }
  }
  @media screen and (max-width: 1200px) {
    #brandBodyer {
      .qjtcoBrand {
        width: 93%;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
      }
      h2 {
        text-align: center;
        margin: 20px auto;
      }
      ul {
        width: 93%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>