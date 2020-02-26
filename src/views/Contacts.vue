<template>
  <div class="wrapper">
    <div id="contactsBodyer">
      <h2>选择青玖 选择品质</h2>
      <div class="contactsMsg">
        <div>
          <img :src="contactWay.siteImg" alt="青玖科技有限公司地址" />
        </div>
        <ul>
          <li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>
          <li>
            <i class="iconfont icon-qq"></i>
            <a
              :href="'tencent://message/?uin=' + contactWay.qq + '&Site=&Menu=yes'"
              v-text="contactWay.qq"
            ></a>
          </li>
          <li>
            <i class="iconfont icon-youxiang-"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <li>
            <i class="iconfont icon-dizhi"></i>
            <a href="#" v-text="contactWay.site"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "联系我们-青玖科技-青玖科技联系方式-官方微信-电话-邮箱-服务号-客服-青玖科技地址",
    meta: [
      {
        name: "keywords",
        content: "青玖科技联系方式,官方微信,电话,邮箱,微信服务号,客服,青玖科技地址"
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
      contactWay: {
        // 网站底部部邮箱
        email: "qjtcoonline@163.com",
        // 网站底部电话
        tel: "15241794625",
        // 网站底部客服QQ
        qq: "1575246119",
        // 地址
        site: "吉林省长春市经济开发区世纪大街长春总部基地D地块B座1单元1042号室",
        siteImg: "https://www.qjtco.com/assets/image/site.jpg"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #contactsBodyer{
    width: 1200px;
    margin: 90px auto 130px;
    overflow: hidden;
    h2{
        margin:10px auto 30px;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
    }
    .contactsMsg{
        div{
            // width: 400px;
            // height: 300px;
            float: left;
            margin: 40px;
            img{
                width: 400px;
                height: 300px;
            }
        }
        ul{
            display: block;
            width: 700px;
            height: 230px;
            float: right;
            margin: 40px auto;
            line-height: 40px;
            font-size: 1.2em;
            padding-top: 70px;
            li{
                i{
                    font-size: 1.5em;
                    margin-right: 20px;
                }
                a{
                    color: #000000;
                }
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    #contactsBodyer{
        margin: 40px auto 10px;
        width: 100%;
        .contactsMsg{
            div{
                width: 93%;
                height: auto;
                margin: 20px auto;
                float: none;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            ul{
                width: 90%;
                float: none;
                margin: 20px auto;
                padding-top:0 ;
            }
        }
    }
}
}
</style>