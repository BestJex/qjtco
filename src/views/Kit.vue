<template>
  <div class="wrapper">
    <div id="kitBorder">
      <h2>工具合集（即将推出）</h2>
      <div v-for="(item,index) in kitItem" :key="index">
        <h3 v-text="item.itemClass"></h3>
        <ul>
          <li v-for="(item2,index2) in item.list" :key="index2">
            <a :href="item2.href" v-text="item2.title"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "小工具-青玖科技-pdf转换工具-图片格式转换工具-视频下载工具-在线开发工具",
    meta: [
      {
        name: "keywords",
        content: "办公工具,pdf转world,图片格式转换,视频下载工具,在线开发工具"
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
      kitItem: [
        {
          itemClass: "转换类工具:",
          list: [
            {
              title: "pdf转word",
              href: "#"
            },
            {
              title: "pdf转excel",
              href: "#"
            },
            {
              title: "pdf转ppt",
              href: "#"
            },
            {
              title: "psd转png",
              href: "#"
            },
            {
              title: "psd转jpg",
              href: "#"
            },
            {
              title: "png转jpg",
              href: "#"
            },
            {
              title: "jpg转png",
              href: "#"
            }
          ]
        },
        {
          itemClass: "下载工具:",
          list: [
            {
              title: "抖音视频无水印下载",
              href: "#"
            },
            {
              title: "今日头条视频下载",
              href: "#"
            },
            {
              title: "YouTube视频下载",
              href: "#"
            },
            {
              title: "bilibili视频下载",
              href: "#"
            }
          ]
        },
        {
          itemClass: "在线开发工具:",
          list: [
            {
              title: "在线photoshop",
              href: "#"
            },
            {
              title: "在线压缩代码",
              href: "#"
            },
            {
              title: "在线json数据格式化",
              href: "#"
            },
            {
              title: "php在线工具",
              href: "#"
            },
            {
              title: "python在线工具",
              href: "#"
            },
            {
              title: "node.js在线工具",
              href: "#"
            },
            {
              title: "js压缩/解压工具",
              href: "#"
            },
            {
              title: "html压缩/解压工具",
              href: "#"
            },
            {
              title: "在线Markdown",
              href: "#"
            },
            {
              title: "在线图片压缩",
              href: "#"
            },
            {
              title: "rgb16进制工具",
              href: "#"
            },
            {
              title: "在线配色",
              href: "#"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #kitBorder {
    h2 {
      margin: 50px auto 30px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    div {
      margin-bottom: 30px;
      h3 {
        width: 1200px;
        margin: auto;
        text-align: left;
        padding-bottom: 20px;
        color: #333333;
      }
      ul {
        margin: auto;
        width: 1200px;
        height: auto;
        overflow: hidden;
        li {
          width: 194px;
          height: 60px;
          margin: 10px 20px;
          float: left;
          text-align: center;
          line-height: 60px;
          border: 3px solid #666666;
          border-radius: 18px;
          a {
            width: 100%;
            height: 100%;
            display: block;
            color: #666666;
            font-size: 1.1em;
          }
          &:hover {
            border: 3px solid #0092ff;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    #kitBorder {
      div {
        width: 93%;
        height: auto;
        overflow: hidden;
        margin: 30px auto;
        h3 {
          width: 100%;
        }
        ul {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          li {
            flex: 40%;
          }
        }
      }
    }
  }
}
</style>