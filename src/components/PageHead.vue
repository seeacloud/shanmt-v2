<template>
  <div class="container" :style="{background:info.bgimg}">
    <div class="con">
      <table>
        <tr>
          <td style="padding-bottom:20px;">
            <h3 class="title" :class="{white:info.fontcolor=='white'}">{{info.title}}</h3>
            <h5 :class="{white:info.fontcolor=='white'}" class="title-des">
              {{info.subtitle}}
            </h5>

            <div class="code-img-group">
              <div class="code-img" v-if="info.codeurl!=''">
                <img :src="info.codeurl" alt=""/>
                <div :class="{white:info.fontcolor=='white'}" v-if="info.codeurl!=''">扫码下载山木通APP</div>
              </div>
              <div class="code-img" v-if="info.codewx!=''">
                <img :src="info.codewx" alt=""/>
                <div :class="{white:info.fontcolor=='white'}" v-if="info.codewx!=''">扫码关注山木通微信公众号</div>
              </div>
            </div>
            <a href="buy.html" class="smt-btn-fill buy-btn" :class="{btnwhite:info.fontcolor=='white'}">立即购买</a>
          </td>
          <td>
            <!--<img :src="info.mainimg" alt="" v-if="info.mainimg!=''">-->
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
    color:$blue;
  }
.title-des{
  font-size: 14px;
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
    padding: 15px 20px 0 0;
    display: inline-block;
    text-align: center;
    img {
      display: inline-block;
      width: 80px;
      height: auto;
    }
  }
  .buy-btn{
    margin-bottom: 20px;
  }
</style>
