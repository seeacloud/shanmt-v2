<template>
  <div style="background:#ffffff;border-bottom:1px solid #eeeeee;">
    <div class="eyebrow">
      <div class="con">
        <a href="http://www.moyasz.com" target="_blank" style="margin-right:20px;">莫亚科技旗下产品</a>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=712381238&site=qq&menu=yes" target="_blank" class="qq-link"><i class="iconfont">&#xe64a;</i> 售前咨询 </a>

        <span class="phone"><i class="iconfont" style="line-height:30px;vertical-align: bottom;margin-right:5px;">&#xe682;</i>咨询电话: 0755-8657 5595</span>
      </div>
    </div>
    <div class="menu">
      <div class="con">
        <div class="menu-items">

          <div v-for="(item,index) in items" :key="index" class="item-wrap" :id="item.name"
               @mouseenter="showSub($event)" @mouseleave="moveout" @click="moveout">
            <a :href="item.link" :class="{active:activemenu==item.name}"
            >{{item.title}}</a>
            <div class="sub-menu" v-show="currentItem=='products'">
              <a v-for="(sub,index) in item.sub" :key="index" :href="sub.link">{{sub.title}}</a>
            </div>
          </div>

        </div>
        <a href="index.html" target="_self" id="a-logo">
          <img :src="logoUrl"><p class="slogan">山木通·云平台 让管理更轻松</p>
        </a>
        <div class="log-items">
          <a href="http://shanmt.com/public/trySmt" target="_blank" class="a-btn">免费试用</a>
          <a href="login.html#/login">登录</a>
          <a href="login.html#/signup">注册</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  import Vue from 'vue'

  Vue.use(Router)

  export default {
    name: 'header',
    props: ['activemenu'],
    data () {
      return {
        currentItem: '',
        logoUrl: './static/img/smtlogo.jpg',
        items: [
          {name: 'index', title: '首页', link: 'index.html', sub: []},
          {
            name: 'products',
            title: '产品',
            link: 'products.html#/smtm',
            sub: [
              {title: '云订货平台', link: 'products.html#/order'},
              {title: '建材家具厂家版', link: 'products.html#/smtm'},
              {title: '建材家具门店版', link: 'products.html#/smtagent'},
              {title: '云进销存', link: 'products.html#/jxc'},
              {title: '云考勤', link: 'products.html#/attendance'}
            ]
          },
          {name: 'buy', title: '购买', link: 'buy.html', sub: []},
//          {name: 'join', title: '合作', link: 'join.html', sub: []},
          {name: 'help', title: '帮助', link: 'help.html', sub: []},
          {name: 'about', title: '关于山木通', link: 'about.html#/intro', sub: []}
        ]
      }
    },
    methods: {
      showSub: function (e) {
        this.currentItem = e.target.id
        console.log(this.currentItem)
      },
      moveout: function () {
        console.log('move out')
        this.currentItem = ''
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";
.qq-link{
  color: deepskyblue;
}
  .qq-link:hover{
    color: $smtred;
  }
  .slogan{
    margin: 0;
    padding: 0;
    text-indent: 0;
    font-size: 12px;
    margin-top: -12px;
    color: #666;
    letter-spacing: 1px;
    padding-left: 3px;
  }

  .eyebrow {
    text-align: right;
    border-bottom: 1px solid #eeeeee;
    height: 30px;
    font-size: 12px;
    min-width: 1180px;
    .con {
      height: 30px;
    }

  }

  .active {
    color: $smtred;
  }

  .phone {
    color: $smtred;
    font-size: inherit;
    line-height: 30px;
    margin-left: 20px;
  }

  .menu {
    height: 60px;
    width: 100%;
    min-width: 1180px;
    display: block;
    .con {
      position: relative;
    }
    i-button {
      display: inline-block;
      vertical-align: baseline;
    }
  }

  .menu-items {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    a {
      display: inline-block;
      margin: 0 15px;
      font-size: inherit;
      line-height: 30px;
    }
  }

  .item-wrap {
    display: inline-block;
    position: relative;
  }

  @media screen and(min-width: 1650px) {
    .menu-items {
      a {
        font-size: 18px;
      }
    }

  }

  .sub-menu {
    width: 150px;
    background: #ffffff;
    position: absolute;
    z-index: 999;
    top: 60px;
    left: -5px;
    font-size: 0;
    line-height: 0;
    a {
      display: block;
      color: #666666;
      font-size: 12px;
      margin: 0;
      padding: 0;
      line-height: 40px;
      text-align: left;
      padding-left: 15px;
      font-size: 14px;
      border-bottom: 1px solid #eeeeee;
    }
    a:hover {
      color: $smtred;
    }
  }

  #a-logo {
    position: absolute;
    left: 0;
    top: 5px;
  }

  .log-items {
    position: absolute;
    right: 0;
    top: 0;
    height: 90px;
    a {
      font-size: 14px;
      margin: 0 5px;
      height: 30px;
      line-height: 30px;
      margin-top: 15px;
    }

    .a-btn {
      display: inline-block;
      background: $blue;
      padding: 0 15px;
      font-size: 12px;
      border-radius: 15px;
      color: #ffffff;
    }
    .a-btn:hover {
      background: $lightblue;
    }
  }

</style>
