<template>
  <div class="wrapper">
    <div id="employBodyer">
      <h2>青玖科技有限公司招聘信息</h2>
      <p v-show="employActive">暂无招聘信息</p>
      <div class="item" v-for="(item,index) in employ" :key="index" v-show="!employActive">
        <h3>
          {{item.job}}
          <span v-text="'薪资：'+item.pay"></span>
        </h3>
        <h3>岗位说明：</h3>
        <ol v-for="(item2,index2) in item.explain" :key="index2">
          <li v-text="item2"></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "招募令-青玖科技-招聘-应届生求职-前端工程师-ui设计-php-java",
    meta: [
      {
        name: "keywords",
        content: "招聘,青玖科技,招聘,应届生求职,前端工程师,ui设计,php,java"
      },
      {
        name: "description",
        content:
          "青玖科技有限公司致力于创新开发简洁高效互联网产品,拥有十年从业经验的专业技术团队能够为客户提供小程序、公众号、网站定制开发、ios应用程序定制开发、Android应用程序定制开发、运维推广、服务器部署、软件运维推广、新媒体运营、企业营销等服务。依托青玖科技一站式服务平台为客户提供顶级服务（顶级技术服务、顶级产品、顶级售后服务）。本公司承诺首年赠品牌服务器、.com国际域名、免费提供自交付之日起为期3个月（APP为期1年）的运营服务，青玖科技一站式服务平台期待您的到来"
      }
    ]
  },
  data() {
    return {
      // 是否显示暂无招聘信息
      employActive: false,
      // 招聘信息说明
      employ: [
        {
          // 招聘职位
          job: "UI设计师",
          // 招聘薪资
          pay: "4-5K",
          // 岗位要求
          explain: [
            "本科，1年以上工作经验；",
            "胆大，心细，具有创新思维，熟悉各种图片及前端设计软件；",
            "负责产品视觉设计方案的核心思路；",
            "负责设计用户体验、UI规范以及产品视觉风格的制定，能指导团队根据不同客户需求制定产品UI风格；",
            "负责各种营销活动及宣传素材的设计；",
            "持续关注用户反馈和产品效果，持续改进产品体验。",
            "详情电话咨询。"
          ]
        },
        {
          // 招聘职位
          job: "WEB前端工程师",
          // 招聘薪资
          pay: "5-9K",
          // 岗位要求
          explain: [
            "本科，2年以上工作经验；",
            "熟练掌握Vue框架，熟知Vue基础理论知识、原理；",
            "负责公司PC端项目/网页端项目/手机站项目/微信（公众号和小程序）项目的前端开发工作；",
            "精通WEB开发流程,有与后台工程师合作开发的经验；",
            "掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，会操作Html5;熟悉jquery等js类库。",
            "详情电话咨询。"
          ]
        },
        {
          // 招聘职位
          job: "PHP",
          // 招聘薪资
          pay: "4-9K",
          // 岗位要求
          explain: [
            "本科，3年以上工作经验；",
            "拥有独立PHP/MySQL网站开发能力，有开发经验，扎实的编程基本功；",
            "拥有基本的JavaScript/Ajax脚本编写能力",
            "具备一定程度的架构分析能力与设计能力，能够以全局角度考虑网站整体架构；",
            "有良好的编码习惯，代码、开发文档编写规范；",
            "良好的沟通能力和协调能力，能够快速对需求做出分析和判断，提出解决方案。",
            "详情电话咨询。"
          ]
        },
        {
          // 招聘职位
          job: "销售专员",
          // 招聘薪资
          pay: "3-5K",
          // 岗位要求
          explain: [
            "21-26周岁，学历不限，可为应届生，不限专业，适应出差；",
            "良好的语言表达能力、沟通能力；",
            "优秀的执行力和责任感；",
            "周休一天，实习期无责任底薪2000，奖金制度丰富，公司免费培训",
            "详情电话咨询。"
          ]
        }
      ]
    };
  },
  created() {
    // 判断是否有招聘信息如果无招聘信息页面显示“暂无招聘信息”，有则正常显示招聘信息。
    this.employ.length == 0 ? this.employActive = true : this.employActive = false;
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #employBodyer {
    margin: auto;
    width: 1200px;
    height: auto;
    overflow: hidden;
    p {
      text-align: center;
      font-size: 1.2em;
      margin: 30px auto;
      line-height: 300px;
    }
    h2 {
      margin: 30px 0;
      line-height: 40px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    .item {
      width: 100%;
      height: auto;
      background: #f2efe6;
      border-radius: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 40px;
      h3 {
        margin-left: 30px;
        line-height: 30px;
        font-size: 1.3em;
        span {
          margin-left: 15px;
          font-size: 0.8em;
          color: #f17c67;
        }
        &:nth-child(2) {
          font-size: 1.1em;
          color: #717471;
          margin-top: 5px;
          margin-left: 40px;
        }
      }
      ol {
        line-height: 25px;
        margin-left: 40px;
        list-style: inside;
      }
    }
  }

  // 招聘信息响应式
  @media screen and (max-width: 1200px) {
    #employBodyer {
      width: 100%;
      h2 {
        margin: 20px auto 0px;
        font-size: 1.3em;
      }
      .item {
        width: 93%;
        margin: 10px auto 20px;
        border-radius: 6px;
        h3 {
          margin-left: 10px;
          font-size: 1.2em;
          &:nth-child(2) {
            margin-top: 0px;
            margin-left: 15px;
          }
        }
        ol {
          margin-left: 13px;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>