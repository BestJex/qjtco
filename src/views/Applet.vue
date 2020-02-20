<template>
  <div class="wrapper">
    <div id="appletBodyer">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> 小程序定制
      </p>
      <div class="appletWay">
        <h3>
          为什么要抢占
          <strong>小程序市场</strong>
        </h3>
        <ul>
          <li>
            <i class="iconfont icon-liuliangqianbao"></i>
            <p>流量入口</p>
          </li>
          <li>
            <i class="iconfont icon-qian4"></i>
            <p>成本更低</p>
          </li>
          <li>
            <i class="iconfont icon-laba"></i>
            <p>推广迅速</p>
          </li>
          <li>
            <i class="iconfont icon-paiming"></i>
            <p>排名靠前</p>
          </li>
          <li>
            <i class="iconfont icon-shuju"></i>
            <p>数据精准</p>
          </li>
          <li>
            <i class="iconfont icon-zhiwenshibiezhiwen"></i>
            <p>交互简单</p>
          </li>
        </ul>
      </div>
      <div class="advantage">
        <h3>
          小程序的
          <strong>优势</strong>
        </h3>
        <ul>
          <li>
            <div>
              <i class="iconfont icon-ic_market"></i>
            </div>
            <div>
              <h4>市场前景好</h4>
              <p>十亿用户，千亿级市场，功能强大</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-tuiguangrenguanli-"></i>
            </div>
            <div>
              <h4>推广成本低</h4>
              <p>利用微信生态进行裂变式传播，成本低效果好</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-o2o_card"></i>
            </div>
            <div>
              <h4>实现O2O模式</h4>
              <p>将线上线下完美的结合起来，牢牢抓住用户</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-guanjianci"></i>
            </div>
            <div>
              <h4>关键词占位</h4>
              <p>越早上线，关键词站位越多，排名优势大，拦截行业流量多</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-qian"></i>
            </div>
            <div>
              <h4>盈利多元化</h4>
              <p>开放权限，商家可招商、续费、运营等方式实现迅速盈利</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-changjing"></i>
            </div>
            <div>
              <h4>应用场景广</h4>
              <p>支持多种场景应用，让服务随时随地触达用户</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-houtaizonglan"></i>
            </div>
            <div>
              <h4>一个后台</h4>
              <p>公众号和小程序实现数据互通，方便实用</p>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-ruanjiankaifabao"></i>
            </div>
            <div>
              <h4>开发成本低</h4>
              <p>开发门槛和运营成本相较于APP都要低很多</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="trade">
        <h3>
          小程序
          <strong>适用领域</strong>
        </h3>
        <ul>
          <li>游戏</li>
          <li>电商</li>
          <li>美食</li>
          <li>医疗</li>
          <li>母婴</li>
          <li>生活</li>
          <li>房产</li>
          <li>办公</li>
          <li>搞笑</li>
          <li>教育</li>
          <li>阅读</li>
          <li>图像</li>
          <li>工具</li>
          <li>运动</li>
          <li>金融</li>
          <li>影音</li>
          <li>资讯</li>
          <li>购物</li>
          <li>出行</li>
          <li>社交</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  #appletBodyer {
    margin: auto;
    overflow: hidden;
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    // 抢占市场
    .appletWay {
      overflow: hidden;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 1.6em;
        color: #333333;
        strong {
          color: #ee5e44;
        }
      }
      ul {
        width: 1200px;
        height: 150px;
        margin: 30px auto;
        overflow: hidden;
        li {
          width: 200px;
          height: auto;
          float: left;
          text-align: center;
          i {
            display: block;
            width: 100px;
            height: 100px;
            line-height: 100px;
            font-size: 2.3em;
            color: #ffffff;
            margin: auto;
            background: #f6a70f;
            // ie9以上及其他浏览器背景样式
            background: linear-gradient(to bottom, #f07a1a, #f7b00d);
            border-radius: 20px;
          }
          p {
            line-height: 50px;
          }
        }
      }
    }
    // 小程序的优势
    .advantage {
      padding-top: 30px;
      background: #f2f2f2;
      width: 100%;
      height: auto;
      overflow: hidden;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 1.6em;
        color: #333333;
        strong {
          color: #ee5e44;
        }
      }
      ul {
        width: 1200px;
        margin: auto;
        li {
          width: 250px;
          height: 100px;
          margin: 10px 25px;
          padding: 10px 0;
          float: left;
          div:nth-child(1) {
            width: 80px;
            height: 80px;
            line-height: 100px;
            text-align: center;
            float: left;
            i {
              font-size: 2.8em;
              color: #333333;
            }
          }
          div:nth-child(2) {
            width: 170px;
            float: right;
            h4 {
              line-height: 50px;
              color: #333333;
            }
            p {
              color: #666666;
              font-size: 0.8em;
            }
          }
        }
      }
    }
    .trade {
      padding-top: 30px;
      overflow: hidden;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 1.6em;
        color: #333333;
        strong {
          color: #ee5e44;
        }
      }
      ul {
        width: 1200px;
        margin: 30px auto;
        height: auto;
        overflow: hidden;
        li {
          width: 120px;
          height: 80px;
          line-height: 80px;
          float: left;
          font-size: 1.4em;
          color: #666666;
          text-align: center;
          &:hover {
            color: #ee5e44;
          }
        }
      }
    }
  }

  @media screen and(max-width:1200px) {
    #appletBodyer {
      // width: 93%;
      .appletWay {
        ul {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          height: auto;
          margin: 10px 0;
          li {
            flex: 30%;
          }
        }
      }
      .advantage {
        width: 100%;
        ul {
          width: 100%;
          height: auto;
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      }
      .trade {
        ul {
          margin: 0 auto;
          width: auto;
          display: -webkit-flex;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            flex: 30%;
            height: 80px;
          }
        }
      }
    }
  }
}
</style>