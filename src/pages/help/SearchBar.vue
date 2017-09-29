<template>
  <div style="background:#ffffff;">
    <div class="con">
      <div class="bar">
        <input type="text" placeholder="更多问题请输入问题关键字">
        <Button type="primary" icon="ios-search" class="btn" @click="gotohelp">搜索</Button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      gotohelp: function () {
        window.location.assign('http://shanmt.com/admin/help/doccenter')
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/common';

  .con {
  }

  .bar {
    position: relative;
    width: 800px;
    margin: -30px auto 0 auto;
    display: block;
    background: #ffffff;
    z-index: 100;
    height: 60px;
    -webkit-box-shadow: 2px 2px 10px #aaaaaa;
    -moz-box-shadow: 2px 2px 10px #aaaaaa;
    box-shadow: 2px 2px 10px #aaaaaa;
    input[type="text"] {
      border: none;
      background: none;
      width: 700px;
      padding-left: 20px;
      line-height: 60px;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
  }

  .btn {
    border-radius: 0;
    height: 60px;
    float: right;
    font-size: 16px;
    height: 60px;
  }
</style>
