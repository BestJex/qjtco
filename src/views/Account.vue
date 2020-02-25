<template>
  <div class="wrapper">
    <div id="accountBodyer">
      <p>
        当前位置：首页
        <i class="iconfont icon-sanjiaoyou"></i> 公众号定制
      </p>
      <div>
        <img src="https://www.qjtco.com/assets/image/account.jpg" alt="公众号定制营销策划" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  #accountBodyer {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    div {
      width: 1200px;
      margin: 10px auto 50px;
    }
  }

  @media screen and(max-width:1200px) {
    #accountBodyer {
      div {
        width: 93%;
        margin: 10px auto 20px;
      }
    }
  }
}
</style>