<template>
  <div>
    <div class="con">
      <h1 class="sec-title">请选择您要登录的平台</h1>
      <Row>
        <Col v-for="(item, index) in items" :key="index" span="6">
        <div class="card" :class="{nobdr:item.nobdr}">
          <i class="iconfont" v-html="item.iconcode"></i>
          <h5>{{item.title}}</h5>
          <a :href="item.link" class="smt-btn-fill">立即登录</a>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content',
    data () {
      return {
        items: [
          {title: '云订货平台', iconcode: '&#xe600;', link: 'http://shanmt.com/?type=9', nobdr: false},
          {title: '云进销存', iconcode: '&#xe652;', link: 'http://shanmt.com/?type=9', nobdr: false},
          {title: '建材家具厂家版', iconcode: '&#xe624;', link: 'http://shanmt.com/?type=9', nobdr: false},
          {title: '建材家具门店版', iconcode: '&#xe601;', link: 'http://shanmt.com/?type=9', nobdr: true}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .card {
    text-align: center;
    margin: 50px 0;
    border-right: 1px solid $blue;
  }

  .card:hover
  {
    .iconfont
    {
      background: $blue;
      color: #fff;
    }
    h5
    {
      color: $blue;
    }
  }

  .nobdr {
    border: none;
  }

  .iconfont {
    display: inline-block;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: $blue;
    font-size: 48px;
    border: 1px solid $blue;
    border-radius: 50%;
    margin-bottom: 20px;
  }



</style>
