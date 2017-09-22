<template>
  <div class="card">
      <i class="iconfont" v-html="'&#xe'+info.iconcode"></i>
    <div class="des-wrap">
      <h4>{{info.title}}</h4>
      <p> {{info.des}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'funccard',
    props: ['info'],
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";

  .card
  {
    border-radius: 5px;
    overflow: hidden;
    height: 300px;
    width: 80%;
    margin-left: 10%;
    text-align: center;
  }
  .iconfont
  {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 50px;
    border: 2px solid $blue;
    border-radius: 50%;
    color: $blue;
  }
  .card:hover
  {
    .iconfont
    {
      background: $blue;
      color: #fff;
    }
  }

  p
  {
    margin-top: 0;
  }



  .des-wrap
  {
    padding: 20px;
    background: #fff;
    color: #333;
    text-align: center;
  }

  p
  {
    text-indent: 0;
    font-size: 16px;
    text-align: center;
  }

</style>
