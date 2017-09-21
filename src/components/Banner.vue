<template>
  <div class="main">
    <img :src="info.imgurl" alt=""/>
    <div class="con">
      <h1 class="title" :class="{txtcenter:info.txtalign=='center'}">{{info.title}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props: ['info'],
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";

  .main {
    height: 320px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  .con {
    height: 320px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }

  .title {
    color: #333;
    margin-top: 120px;
    display: inline-block;
    position: relative;
  }
  .title:before
  {
    position: absolute;
    content: '';
    height: 4px;
    width: 40px;
    background: $smtred;
    left: 0;
    top: -5px;
  }

  .txtcenter {
    text-align: center;
  }
</style>
