<template>
  <div class="wrapper">
    <div id="footer">
      <div class="contactWay">
        <div class="weChat">
          <img :src="contactWay.weChat" alt="青玖科技官方微信服务号" />
          <h3>官方微信服务号</h3>
        </div>
        <ul>
          <li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>
          <li>
            <i class="iconfont icon-youxiang-"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <li>
            <i class="iconfont icon-qq"></i>
            <a
              :href="'tencent://message/?uin=' + contactWay.qq + '&Site=&Menu=yes'"
              v-text="contactWay.qq"
            ></a>
          </li>
        </ul>
      </div>
      <!-- 版权信息 -->
      <div class="qjtcoCopyright">
        <h4>
          <p v-text="footer.copyright"></p>
          <span v-text="footer.icp"></span>
          <span class="spannone">|</span>
          <span v-text="footer.institutionCode"></span>
          <span class="spannone">|</span>
          <span v-text="footer.vieID"></span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactWay: {
        // 官方微信服务号
        weChat: "https://www.qjtco.com/assets/image/WeChat.png",
        // 网站底部部邮箱
        email: "qjtcoonline@163.com",
        // 网站底部电话
        tel: "15241794625",
        // 网站底部客服QQ
        qq: "1575246119"
      },
      footer: {
        copyright: "Copyright © 2019 - 2020 QJTCO. All Rights Reserved.",
        icp: "吉ICP备19007084号",
        institutionCode: "组织机构代码:MA1798W50",
        vieID: "工商电子标识:91220108MA1798W501"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // footer公共样式
  #footer {
    width: 100%;
    overflow: hidden;
    background: #2b2b2b;
    .contactWay {
      width: 1200px;
      margin: auto;
      overflow: hidden;
      .weChat {
        margin-top: 25px;
        margin-bottom: 15px;
        width: 150px;
        height: 160px;
        text-align: center;
        float: left;
        h3 {
          line-height: 30px;
          margin-top: 5px;
          font-size: 1em;
          color: #eeeeee;
        }
        img {
          width: auto;
          height: 120px;
          border-radius: 12px;
        }
        // 微信官方服务号二维码放大动画
        -moz-transition: all 0.8s; /* Firefox 4 */
        -webkit-transition: all 0.8s; /* Safari and Chrome */
        -o-transition: all 0.8s; /* Opera */
        transition: all 0.8s; /* ie9+及其他 */
        &:hover {
          -moz-transform: scale(1.2);
          -webkit-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
      ul {
        display: block;
        width: 280px;
        height: 120px;
        margin: 40px 0;
        float: right;
        overflow: hidden;
        li {
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          i {
            font-size: 1.5em;
            color: #eeeeee;
            margin-right: 15px;
          }
          a {
            font-size: 1em;
            color: #eeeeee;
            &:hover {
              color: #0092ff;
            }
          }
        }
      }
    }
    .qjtcoCopyright {
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #111111;
      h4 {
        width: 1200px;
        margin: 20px auto;
        text-align: center;
        line-height: 30px;
        span {
          margin: 0 6px;
        }
        font-size: 0.8em;
        color: #b1b0b0;
      }
    }
  }
  // footer响应式（当像素在1200px以下时显示以下样式）
  @media screen and (max-width: 1200px) {
    #footer {
      .contactWay {
        width: 300px;
        height: auto;
        .weChat {
          float: none;
          margin: 20px auto;
          &:hover {
            transform: none;
          }
        }
        ul {
          margin: 20px auto;
          float: none;
          padding-left: 40px;
        }
      }
      .qjtcoCopyright {
        h4 {
          width: 100%;
          line-height: 20px;
          span {
            margin: 0 6px;
            display: block;
          }
          .spannone {
            display: none;
          }
        }
      }
    }
  }
}
</style>