<template>
  <div class="wrapper">
    <!-- header开始 -->
    <div id="header">
      <!-- 顶部电话邮箱 -->
      <div id="top">
        <ul>
          <li>
            <i class="iconfont icon-youxiang-"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>
        </ul>
      </div>
      <!-- 导航栏 -->
      <div id="nav">
        <!-- 公司logo -->
        <h1>
          <a href="https://www.qjtco.com/">
            <img src="https://www.qjtco.com/assets/image/qjtcoLogo.png" alt="青玖科技有限公司" />
          </a>
        </h1>
        <!-- 响应式导航栏按钮 -->
        <span class="muen" @click="navbtn">
          <i :class="navBtnClass"></i>
        </span>
        <!-- 导航栏列表 -->
        <ul :class="{'navActive':navShow}" @click="navhidden">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/brand">品牌</router-link>
          </li>
          <li>
            <router-link to="/about">魅力青玖</router-link>
          </li>
          <li>
            <router-link to="/kit">小工具</router-link>
          </li>
          <li>
            <router-link to="/news">行业资讯</router-link>
          </li>
          <li>
            <router-link to="/employ">招募令</router-link>
          </li>
          <li>
            <router-link to="/contacts">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- header结束 -->
  </div>
</template>

<script>
export default {
  props: ["contacts"],
  data() {
    return {
      contactWay: {
        // 网站顶部邮箱
        email: "qjtcoonline@163.com",
        // 网站顶部电话
        tel: "15241794625"
      },
      navShow: true, //响应式情况下navShow控制navActive类控制导航栏是否显示
      navBtnClass: "iconfont icon-daohang1"
    };
  },
  methods: {
    navbtn: function() {
      // 通过class的变化控制导航按钮图标
      this.navShow ? (this.navBtnClass = "iconfont icon-guanbi"): (this.navBtnClass = "iconfont icon-daohang1");
      //通过navShow的取反控制是否绑定navActive类,控制菜单是否显示
      this.navShow = !this.navShow;
    },
    navhidden: function() {
      // 修复路由跳转后菜单不收起的bug
      this.navShow = !this.navShow;
      this.navBtnClass = "iconfont icon-daohang1";
    }
  },
  created() {
    // 将父组件props传递过来的值赋给data中contactWay
    this.contactWay = this.contacts;
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #header {
    // 顶部email和phone
    position: relative;
    z-index: 999;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 0 6px #eeeeee;
    #top {
      height: 32px;
      background: #3a3e3f;
      overflow: hidden;
      ul {
        display: block;
        width: 1200px;
        margin: auto;
        line-height: 32px;
        li {
          float: left;
          a {
            color: #cad2d5;
            font-size: 1em;
          }
          margin-right: 20px;
          &:hover a {
            color: #ff8a00;
          }
          i {
            color: #ffffff;
            font-size: 1.2em;
            margin: 0px 15px;
          }
        }
      }
    }
    // 顶部导航栏及LOGO样式
    #nav {
      clear: both;
      width: 1200px;
      height: 100px;
      margin: auto;
      position: relative;
      z-index: 999;
      // LOGO
      h1 {
        float: left;
        line-height: 100px;
        img {
          width: 190px;
          height: 60px;
          margin-right: 30px;
        }
      }
      // 隐藏nav按钮
      .muen {
        display: none;
      }
      // 导航栏
      > ul {
        line-height: 100px;
        > li {
          float: left;
          a {
            display: block;
            width: 100px;
            height: 40px;
            margin: 30px 20px;
            text-align: center;
            line-height: 40px;
            color: #000000;
            &:hover {
              background: #0092ff;
              border-radius: 50px;
              color: #ffffff;
            }
          }
          .active {
            background: #0092ff;
            border-radius: 50px;
            color: #ffffff;
          }
        }
      }
    }
  }

  // header响应式（当像素在1200px以下时显示以下样式）
  @media screen and (max-width: 1200px) {
    #header {
      border-bottom: 1px solid #b9b9b9;
      #top {
        ul {
          width: 100%;
          li {
            font-size: 0.6em;
            line-height: 32px;
            i {
              margin: 0px 5px;
            }
          }
        }
      }
      #nav {
        width: 100%;
        height: 72px;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 999;
        // logo样式
        h1 {
          height: auto;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          img {
            height: 52px;
            width: auto;
            margin-left: 30px;
          }
        }
        // 导航栏按钮样式
        .muen {
          display: block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          margin-right: 30px;
          i {
            font-size: 1.8em;
          }
        }
        // 通过是否绑定navActive类控制导航显示
        .navActive {
          display: none;
        }
        > ul {
          position: absolute;
          top: 72px;
          right: 0;
          z-index: 999;
          width: 240px;
          background: #f7f7f7;
          border-radius: 0 0 0 10px;
          overflow: hidden;
          li {
            width: 240px;
            height: 44px;
            line-height: 43px;
            text-align: center;
            border-bottom: 1px solid #ffffff;
            a {
              width: 100%;
              height: 100%;
              margin: 0;
              &:hover {
                border-radius: 0;
              }
            }
            .active {
              border-radius: 0;
            }
          }
        }
      }
    }
  }
}
</style>