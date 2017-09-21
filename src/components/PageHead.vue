<template>
  <div class="container" :style="{background:info.bgimg}">
    <div class="con">
      <table>
        <tr>
          <td>
            <h2 class="title" :class="{white:info.fontcolor=='white'}">{{info.title}}</h2>
            <h5 :class="{white:info.fontcolor=='white'}">
              {{info.subtitle}}
            </h5>
            <div class="code-img">
              <img :src="info.codeurl" alt=""/>
            </div>
            <div :class="{white:info.fontcolor=='white'}">扫码下载山木通APP</div>
            <a href="buy.html" class="smt-btn-fill" :class="{btnwhite:info.fontcolor=='white'}">立即购买</a>
          </td>
          <td>
            <img :src="info.mainimg" alt="" v-if="info.mainimg!=''">
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'pagehead',
    props: ['info'],
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../static/common';

  .container {
    /*background: url(../../static/img/store.jpg) no-repeat center;*/
    height: 400px;
    color: #333333;
  }

  .title {
    color: $blue;
  }

  .white {
    color: #ffffff;
  }

  .con {
    height: 100%;
  }

  table {
    height: 100%;
    width: 100%;
  }

  tr {
    height: 100%;
  }

  td {
    width: 50%;
    vertical-align: middle;
    img {
      width: 100%;
      height: auto;
    }
  }

  .btnwhite
  {
    background: none;
    border: 1px solid #fff;
    color: #fff;
  }
  .btnwhite:hover
  {
    background: #fff ;
    color: $blue;
  }

  .code-img {
    padding: 15px 0 0 0;
    img {
      width: 100px;
      height: auto;
    }
  }
</style>
