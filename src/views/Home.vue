<template>
  <div class="wrapper">
    <el-carousel :height="bannerHeight">
      <el-carousel-item v-for="(item,index) in homeBanner" :key="index">
        <img class="homeBanner" :src="item.src" :alt="item.alt" />
      </el-carousel-item>
    </el-carousel>
    <!-- bodyer开始 -->
    <div id="homeBodyer">
      <div class="ourService">
        <h2>我们的服务</h2>
        <h3>Our Service</h3>
        <ul>
          <li>
            <router-link to="/webSite">
              <i class="iconfont icon-wangzhan"></i>
              <h3>网站定制</h3>
              <p>Website custom</p>
            </router-link>
          </li>
          <li>
            <router-link to="/applet">
              <i class="iconfont icon-xiaochengxu"></i>
              <h3>小程序定制</h3>
              <p>Applet customization</p>
            </router-link>
          </li>
          <li>
            <router-link to="/account">
              <i class="iconfont icon-gongzhonghaoguanli"></i>
              <h3>公众号定制</h3>
              <p>Customized public account</p>
            </router-link>
          </li>
          <li>
            <router-link to="/appDevelopment">
              <i class="iconfont icon-ruanjiankaifabao"></i>
              <h3>APP定制</h3>
              <p>APP development</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="discounts">
        <h2>优惠活动</h2>
        <h3>Discounts</h3>
        <ul>
          <li>
            <i class="iconfont icon-yun"></i>
            <strong>首年赠服务器</strong>
          </li>
          <li>
            <i class="iconfont icon-shiwuzhongxin_yumingshenqingfuwu"></i>
            <strong>首年赠.com域名</strong>
          </li>
          <li>
            <i class="iconfont icon-houqiweihuweihuweihuguanli"></i>
            <strong>免费运维3个月</strong>
          </li>
          <li>
            <i class="iconfont icon-peixun"></i>
            <strong>免费培训使用方法</strong>
          </li>
        </ul>
      </div>
      <div class="workFlow">
        <h2>工作流程</h2>
        <h3>Work Flow</h3>
        <ul>
          <li>
            <i class="iconfont icon-jishuhezuoqiatanhezuohuitan"></i>
            <h3>商务洽谈</h3>
          </li>
          <li>
            <i class="iconfont icon-hetong"></i>
            <h3>签订合同</h3>
          </li>
          <li>
            <i class="iconfont icon-qian4"></i>
            <h3>支付定金</h3>
          </li>
          <li>
            <i class="iconfont icon-yanshou"></i>
            <h3>项目交付</h3>
          </li>
          <li>
            <i class="iconfont icon-zhifuweikuan"></i>
            <h3>支付尾款</h3>
          </li>
        </ul>
      </div>
      <div class="ourFriends">
        <h2>我们的伙伴</h2>
        <h3>Our Friends</h3>
        <ul>
          <li v-for="(item,index) in ourFriends" :key="index">
            <img v-lazy="item.src" :alt="item.alt" />
          </li>
        </ul>
      </div>
      <div class="homeSeo">
        <!-- 这里是给百度爬虫爬取的、用户查看不到,此处经过css处理可放置想让蜘蛛爬取却不想用户见到的内容 -->
      </div>
    </div>
    <!-- bodyer结束 -->
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        {
          name: "keywords",
          content: this.meta.keywords
        },
        {
          name: "description",
          content: this.meta.description
        }
      ]
    };
  },
  data() {
    return {
      meta: {
        title:
          "青玖科技有限公司官网-微信小程序定制-公众号定制-网站专业定制开发-app定制-运营推广-营销-十年从业经验专业技术团队",
        keywords:
          "网站定制,公众号定制,小程序定制,app定制,运营推广,营销,定制开发,做网站,做小程序,做软件,定制开发",
        description: "描述"
      },
      bannerHeight: "", //轮播图高度
      homeBanner: [
        {
          src: "https://www.qjtco.com/assets/image/banner1.jpg",
          alt: "网站、小程序、公众号、APP专业定制开发"
        },
        {
          src: "https://www.qjtco.com/assets/image/banner2.jpg",
          alt: "顶级品牌、顶级售后、顶级产品、办公工具、网址导航"
        },
        {
          src: "https://www.qjtco.com/assets/image/banner3.jpg",
          alt: "免费赠首年服务器、三个月免费运维、免费培训"
        }
      ],
      ourFriends: [
        {
          src: "https://www.qjtco.com/assets/image/friends1.png",
          alt: "阿里巴巴"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends2.png",
          alt: "腾讯公益"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends3.png",
          alt: "途客租车"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends4.png",
          alt: "壹想食"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends5.png",
          alt: "腾讯"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends6.png",
          alt: "Adobe"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends7.png",
          alt: "新网"
        },
        {
          src: "https://www.qjtco.com/assets/image/friends8.png",
          alt: "微软"
        }
      ]
    };
  },
  created() {
    // axios获取home数据
    this.$axios
      .get("api/home")
      .then(res => {
        // console.log(res.data);
        this.meta = res.data.meta;
        this.homeBanner = res.data.homeBanner;
        this.ourFriends = res.data.ourFriends;
      })
      .catch(function(error) {
        console.log(error);
      });
    // 获取当前窗口宽度通过计算动态设置轮播图高度
    this.bannerHeight = (document.body.clientWidth * 400) / 1390 + "px";
  },
  mounted() {
    // 动态设置meta
    setTimeout(() => {
      this.pageName = "home";
    }, 2000);
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // 解决轮播图ie低版本滚动条问题
  .el-carousel {
    overflow: hidden;
  }
  // element轮播图组件样式
  .homeBanner {
    width: 100%;
    height: auto;
  }
  // 其他样式
  #homeBodyer {
    // 隐藏给百度爬虫看的内容
    .homeSeo {
      width: 0px;
      height: 0px;
      position: fixed;
      z-index: 9999;
    }
    overflow: hidden;
    .ourService {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        overflow: hidden;
        li {
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          width: 220px;
          height: auto;
          display: block;
          float: left;
          margin: 0 40px;
          padding-top: 30px;
          i {
            font-size: 6em;
            color: #6390d1;
          }
          h3 {
            line-height: 40px;
            color: #2c2c2c;
          }
          p {
            line-height: 20px;
            color: #808080;
          }
          &:hover {
            i {
              color: #ffb400;
            }
            h3 {
              color: #6390d1;
            }
          }
        }
      }
    }
    // 优惠活动
    .discounts {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        margin: 30px 0;
        overflow: hidden;
        li {
          float: left;
          width: 280px;
          margin: 10px 10px;
          height: 140px;
          line-height: 140px;
          background: #495a80;
          color: #ffffff;
          font-size: 1.3em;
          border-bottom: #ffb400 solid 5px;
          i {
            font-size: 1.5em;
            margin-right: 15px;
          }
          &:hover {
            color: #ffb400;
          }
        }
      }
    }
    // 工作流程
    .workFlow {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        text-align: center;
        margin: 30px 0;
        overflow: hidden;
        li {
          background: #e7791a;
          padding: 30px 0;
          margin: 0 20px;
          width: 200px;
          float: left;
          i {
            font-size: 4em;
            color: #ffffff;
          }
          h3 {
            color: #ffffff;
            line-height: 40px;
            margin-top: 20px;
          }
          &:nth-child(2),
          &:nth-child(4) {
            background: #196193;
            margin-top: 50px;
          }
          // 合作流程鼠标移入旋转
          -moz-transition: all 1s; /* Firefox 4 */
          -webkit-transition: all 1s; /* Safari and Chrome */
          -o-transition: all 1s; /* Opera */
          transition: all 1s; /* ie9+及其他 */
          &:hover {
            // 鼠标移入旋转
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      }
    }
    // 合作伙伴
    .ourFriends {
      width: 1200px;
      margin: auto;
      text-align: center;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        background: #f2efe6;
        width: 1200px;
        overflow: hidden;
        margin: 30px auto;
        li {
          width: 220px;
          height: 100px;
          margin: 20px 40px;
          float: left;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
          -moz-transition: all 1s; /* Firefox 4 */
          -webkit-transition: all 1s; /* Safari and Chrome */
          -o-transition: all 1s; /* Opera */
          transition: all 1s; /* ie9+及其他 */
          &:hover {
            // 鼠标移入放大
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
          }
        }
      }
    }
  }

  // 首页响应式
  @media screen and (max-width: 1200px) {
    #homeBodyer {
      .ourService {
        width: 93%;
        h2 {
          margin: 20px auto 10px;
          line-height: 30px;
        }
        h3 {
          font-size: 1em;
        }
        ul {
          li {
            padding-top: 20px;
            width: 50%;
            margin: 0;
            i {
              font-size: 4em;
            }
            h3 {
              font-size: 1em;
              line-height: 25px;
            }
            p {
              font-size: 0.8em;
              line-height: 12px;
            }
          }
        }
      }
      // 优惠活动
      .discounts {
        width: 93%;
        ul {
          margin: 30px 0 0;
          display: -webkit-flex;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 45%;
            margin: 10px 0;
            font-size: 1em;
            height: 100px;
            line-height: 50px;
            background: #6491d1;
            i {
              display: block;
              font-size: 2em;
              margin: 0;
            }
          }
        }
      }
      // 工作流程
      .workFlow {
        width: 93%;
        ul {
          margin: 30px 0;
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          li {
            padding: 0;
            margin: 0;
            width: 18%;
            overflow: hidden;
            padding-top: 15px;
            i {
              font-size: 2em;
            }
            h3 {
              font-size: 0.8em;
              margin-top: 0;
            }
          }
        }
      }
      // 合作伙伴
      .ourFriends {
        width: 93%;
        ul {
          width: 93%;
          overflow: hidden;
          margin: 30px auto;
          padding: 15px 0;
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          li {
            width: 40%;
            height: auto;
            margin: 5px auto;
            border-radius: 4px;
            img {
              width: 100%;
              height: 100%;
            }
            &:hover {
              // 取消鼠标移入放大动画
              -moz-transform: none;
              -webkit-transform: none;
              -o-transform: none;
              transform: none;
            }
          }
        }
      }
    }
  }
}
</style>