<template>
  <div class="main">
    <div :style="{background:info.bg}" class="base">
      <h5>{{info.title}}</h5>
      <h1>{{info.price}}</h1>
      <span class="unit">元/年</span>
    </div>

    <div class="spec">
      <span class="des" v-for="(item,index) in info.spec">
        {{item.des}}
      </span>
    </div>
    <a :href="info.link" class="smt-btn-fill">立即购买</a>
  </div>
</template>

<script>
  export default {
    name: 'pricecard',
    props: ['info'],
    data () {
      return {}
    },
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .main
  {
    color: #fff;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 3px 3px 10px #aaaaaa;
    -moz-box-shadow: 3px 3px 10px #aaaaaa;
    box-shadow: 3px 3px 10px #aaaaaa;
  }

  .smt-btn-fill
  {
    margin: 20px 0;
  }
  .base
  {
    padding: 20px 5px;
  }
  h1
  {
    font-size: 48px;
  }

  .spec
  {
    color: #333;
    background: #fff;
  }
  .des
  {
    display: block;
    padding: 12px 15px;
    border-bottom: 1px dashed #ddd;
    font-size: 14px;
    text-align: left;
    color: #666;
  }
</style>
