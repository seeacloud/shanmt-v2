<template>
  <div class="sec">
    <div class="con">
      <h1 class="sec-title">{{info.title}}</h1>
      <h5 class="sub-title">{{info.subtitle}}</h5>
      <table>
        <tr>

          <td>
            <img :src="info.imgurl" alt="" class="img-sec">
          </td>
          <td class="td-caption">
            <h2 class="caption-title">
              {{info.captitle}}
            </h2>
            <h5 v-for="(item,index) in info.captions" :key="index">
              {{item.des}}
            </h5>
            <a href="" class="smt-btn-fill" v-show="info.btn!=''">{{info.btn}}</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info'],
    data () {
      return {}
    }
  }

</script>

<style lang='scss' scoped>
  @import "../../static/sec";
  @import "../../static/common";
</style>


