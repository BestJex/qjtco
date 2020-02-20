<template>
  <div class="wrapper">
    <div id="appBodyer">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> APP定制
      </p>
      <div>
        <i class="iconfont icon-anzhuo"></i>
        <h3>
          <strong>安卓</strong>应用
        </h3>
        <p>安卓（Android）是一种基于Linux的自由及开放源代码的操作系统。主要使用于移动设备，如智能手机和平板电脑，由Google公司和开放手机联盟领导及开发。Android操作系统最初由Andy Rubin开发，主要支持手机。2005年8月由Google收购注资。2007年11月，Google与84家硬件制造商、软件开发商及电信营运商组建开放手机联盟共同研发改良Android系统。随后Google以Apache开源许可证的授权方式，发布了Android的源代码。第一部Android智能手机发布于2008年10月。Android逐渐扩展到平板电脑及其他领域上，如电视、数码相机、游戏机、智能手表等。2011年第一季度，Android在全球的市场份额首次超过塞班系统，跃居全球第一。 2013年的第四季度，Android平台手机的全球市场份额已经达到78.1%。2013年09月24日谷歌开发的操作系统Android在迎来了5岁生日，全世界采用这款系统的设备数量已经达到10亿台。</p>
        <i class="iconfont icon-ios"></i>
        <h3>
          <strong>ios</strong>应用
        </h3>
        <p>iOS 是由苹果公司开发的移动操作系统 。苹果公司最早于 2007 年 1 月 9 日的 Macworld 大会上公布这个系统，最初是设计给 iPhone 使用的，后来陆续套用到 iPod touch 、iPad 以及 Apple TV 等产品上。iOS与苹果的 macOS 操作系统一样，属于类Unix的商业操作系统。原本这个系统名为 iPhone OS，因为 iPad，iPhone，iPod touch 都使用 iPhone OS，所以 2010 年 WWDC 大会上宣布改名为 iOS（iOS 为美国 Cisco 公司网络设备操作系统注册商标，苹果改名已获得 Cisco 公司授权）。</p>
        <p>
          <strong>因app制作复杂，涉及方面多，需了解您的具体需求，请致电青玖科技。</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  #appBodyer {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    div {
      width: 1200px;
      margin: 0 auto 40px;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 1.6em;
        color: #333333;
        strong {
          color: #ee5e44;
        }
      }
      p {
        line-height: 25px;
        font-size: 1.1em;
        text-indent: 2em;
        margin: 10px auto;
        strong {
          color: #ee5e44;
        }
      }
      i {
        width: 300px;
        line-height: 100px;
        margin: 20px auto;
        display: block;
        text-align: center;
        font-size: 4em;
      }
      .icon-anzhuo {
        color: #78c257;
      }
      .icon-ios {
        color: #5f5f5f;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #appBodyer {
      p {
        width: 100%;
      }
      div {
        width: 93%;
      }
    }
  }
}
</style>