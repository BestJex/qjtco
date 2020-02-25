<template>
  <div class="wrapper">
    <div id="aboutBodyer">
      <!-- 公司简介 -->
      <div class="companyProfile">
        <h2 v-text="companyProfile.title"></h2>
        <p v-text="companyProfile.content"></p>
      </div>
      <div class="publicBenefit">
        <!-- 栏目标题 -->
        <h2 v-text="publicBenefit.title"></h2>
        <!-- 公司理念 -->
        <p v-text="publicBenefit.content"></p>
        <div class="item">
          <ul>
            <!-- 公益项目图片 -->
            <li v-for="(item,index) in publicBenefit.publicBenefitImg" :key="index">
              <img :src="item.src" :alt="item.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "魅力青玖-青玖科技公司简介-公益",
    meta: [
      {
        name: "keywords",
        content: "青玖科技,青玖,公益,公众号,小程序,网站定制开发,运维推广,服务器部署,软件运维推广,新媒体运营,企业营销"
      },
      {
        name: "description",
        content: "青玖科技有限公司致力于创新开发简洁高效互联网产品,拥有十年从业经验的专业技术团队能够为客户提供小程序、公众号、网站定制开发、运维推广、服务器部署、软件运维推广、新媒体运营、企业营销等服务。青玖科技一站式服务平台期待您的到来"
      }
    ]
  },
  data() {
    return {
      companyProfile: {
        // 标题
        title: "公司简介",
        // 内容
        content:
          "青玖科技(长春)有限公司,是一家以“互联网+”销售服务理念为基础、结合企业产品和服务的运营情况、创新开发简洁高效互联网产品的企业。服务涵盖微信公众号、微信小程序、网站、APP定制开发;计算机软件技术研发、新媒体运营、软件的运营与维护、广告设计、网络推广、网站建设、技术咨询、技术服务等。公司拥有十年经验专业技术团队，能够提供专业高效的技术服务。"
      },
      publicBenefit: {
        // 栏目标题
        title: "我们在行动",
        content:
          "在青玖科技，我们坚信对社会负责是我们商业模式的一部分。自公司创立至今，一直致力于支持和参与符合我们核心价值观和使命的公益和社会责任项目，以科技赋能公益事业，助力社会的发展。",
        // 公益项目图片
        publicBenefitImg: [
          {
            // 公益项目图片
            src: "https://www.qjtco.com/assets/image/publicBenefit (1).jpg",
            // 公益项目图片描述
            alt: "为藏区募集救命药"
          },
          {
            src: "https://www.qjtco.com/assets/image/publicBenefit%20(2).jpg",
            alt: "吉青吉心工程"
          },
          {
            src: "https://www.qjtco.com/assets/image/publicBenefit (3).jpg",
            alt: "吉青吉心工程"
          },
          {
            src: "https://www.qjtco.com/assets/image/publicBenefit (4).jpg",
            alt: "吉青吉心工程"
          },
          {
            src: "https://www.qjtco.com/assets/image/publicBenefit (5).jpg",
            alt: "吉青吉心工程"
          }
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #aboutBodyer {
    width: 1200px;
    margin: auto;
    // 公司简介
    .companyProfile {
      margin-bottom: 30px;
      h2 {
        margin: 30px auto;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      p {
        margin: auto;
        width: 100%;
        line-height: 40px;
        text-indent: 30px;
        font-weight: 500;
      }
    }
    // 公益事业
    .publicBenefit {
      overflow: hidden;
      // 公益事业标题
      h2 {
        margin: 30px auto;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      // 公益理念
      p {
        margin: auto;
        width: 100%;
        line-height: 40px;
        text-indent: 30px;
        font-weight: 500;
      }
      // 公益事业项目
      .item {
        overflow: hidden;
        margin-bottom: 30px;
        ul {
          li {
            float: left;
            margin: 10px 10px;
            height: 220px;
            width: 220px;
            display: block;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #aboutBodyer {
      width: 100%;
      .companyProfile {
        h2 {
          margin: 30px auto 20px;
        }
        p {
          width: 93%;
          line-height: 30px;
          text-indent: 30px;
          font-weight: 500;
        }
      }
      .publicBenefit {
        h2 {
          margin: 0 auto 20px;
        }
        p {
          width: 93%;
          line-height: 30px;
          text-indent: 30px;
          font-weight: 500;
        }
        .item {
          margin-bottom: 10px;
          ul {
            li {
              float: none;
              width: 93%;
              height: auto;
              margin: 10px auto;
            }
          }
        }
      }
    }
  }
}
</style>