<template>
  <div class="wrapper">
    <div id="news">
      <!-- 新闻列表 -->
      <div class="newsItem">
        <ul>
          <li v-for="(item,index) in newsName" :key="index">
            <router-link :to="{name:'NewsDetails',params:{newsId:item.id}}">
              <i class="iconfont icon-sanjiaoyou"></i>
              <p v-text="item.title"></p>
              <span v-text="item.time"></span>
            </router-link>
          </li>
        </ul>
        <!-- 分页器 -->
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-count="pageAll"
            :pager-count="5"
            @current-change="handleCurrentChange"
          ></el-pagination>
          <!-- pager-count设置超过5页隐藏页码--要求大于等于5小于21的奇数 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsName: [
        // 最多显示每页8条资讯
        {
          id: "1",
          title: "[行业资讯] 微信小程序的优势",
          time: "2020-02-11 10:30:32"
        },
        {
          id: "2",
          title: "[行业资讯] 备案管理及网站信息监管维护通知",
          time: "2020-02-08 16:45:25"
        },
        {
          id: "3",
          title: "[行业资讯] 关于公安部备案的通知",
          time: "2020-01-12 15:35:18"
        },
        {
          id: "4",
          title: "[行业资讯] 国际域名实名认证的通知 ",
          time: "2019-11-21 13:35:44"
        },
        {
          id: "5",
          title: "[行业资讯] 微信发展史",
          time: "2019-10-14 11:20:25"
        },
        {
          id: "6",
          title: "[行业资讯] 建设企业官网的重要性",
          time: "2019-09-16 10:30:32"
        },
        {
          id: "7",
          title: "[行业资讯] 响应式网站的优势",
          time: "2019-09-01 08:45:25"
        },
        {
          id: "8",
          title: "[行业资讯] 响应式网站的优势",
          time: "2019-09-01 08:45:25"
        }
      ],
      pageAll: 5, //总页码
      pageNumber: 1, //当前页码
    };
  },
  created() {

  },
  methods: {
    handleCurrentChange(val) {
      // 获取当前页码
      this.pageNumber = val;
      // console.log("当前是第"+this.pageNumber+"页")
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // element-ui分页器居中
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  #news {
    .newsItem {
      margin: 30px auto;
      overflow: hidden;
      padding: 30px 0;
      width: 1200px;
      box-shadow: 0 0 15px #eeeeee;
      ul {
        width: 1100px;
        margin: auto;
        height: 488px;
        overflow: hidden;
        background: #ffffff;
        li {
          width: 100%;
          height: 60px;
          float: left;
          border-bottom: 1px dashed #aaaaaa;
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 60px;
            color: #333333;
            position: relative;
            i {
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              color: #aaaaaa;
            }
            p {
              margin-left: 20px;
              width: 600px;
              float: left;
              overflow: hidden;
              // 文字单行省略
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: left;
            }
            span {
              width: 200px;
              float: right;
              text-align: right;
            }
            &:hover {
              color: #0092ff;
            }
            &:hover i {
              color: #0092ff;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    #news {
      .newsItem {
        width: 93%;
        font-size: 1em;
        ul {
          width: 92%;
          li {
            a {
              p {
                width: 60%;
              }
              span {
                width: 30%;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>