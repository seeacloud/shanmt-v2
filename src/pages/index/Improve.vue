<template>
  <div class="sec">
    <div class="con">
      <div class="title-con">
        <h1>帮助客户实现业绩增长</h1>
        <h5>山木通运用国际先进的互联网、云计算、大数据等技术，结合高品质的客户服务，已为多家企业提供了企业运营与管理完整的互联网解决方案。</h5>
      </div>
      <Row :gutter="20">
        <Col v-for="(item,index) in items" :key="index" span="6">
        <div class="card" :class="{typeb:item.typeB}">
          <img :src="item.imgurl" alt=""/>
          <div class="caption">
            <p>{{item.des}}</p>
            <h5>{{item.name}}</h5>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'improve',
    data () {
      return {
        items: [
          {des: '业务流程的效率提高了很多，业绩增长35%，山木通很好用，很实用', name: '汉瑞木业总经理 戴先军', imgurl: './static/img/back.png', typeB: false},
          {
            des: '山木通有效的将我们与客户关联企业，通过山木通平 台进行沟通互动，提高了各环节的沟通效率。',
            name: '冠湘木业 王厂长',
            imgurl: './static/img/discuss.png',
            typeB: true
          },
          {
            des: '使用山木通手机APP，代理商和厂家管理人员能够真实的感受到互联网技术带来的方便，自从上了山木通平台后，不少代理商客户主动上门来合作了',
            name: '森林木业 信息总监',
            imgurl: './static/img/man.jpg',
            typeB: false
          },
          {des: '山木通的SaaS平台稳定可靠，系统智能化程度高，为我们的管理带来很多便利。', name: '腾达陶瓷 李经理', imgurl: './static/img/officetalk.jpg', typeB: true}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .con {
    padding: 50px 0;
  }

  .card {
    height: 320px;
    text-align: center;
    overflow: hidden;
    position: relative;
    background: #ffffff;
    border: 1px solid #eeeeee;
    img {
      width: 100%;
    }
    .caption {
      position: absolute;
      padding: 0 15px;
      top: 50%;
      left: 0;
      -webkit-transform: translate(0, -50%);
      -moz-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
      color: #ffffff;

      p {
        text-align: left;
        font-size: 14px;
      }
      h5 {
        text-align: right;
        font-size: 14px;
      }
    }
  }

  .typeb {
    .caption {
      top: auto;
      bottom: 20px;
      color: #333333;
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  .title-con {
    margin-bottom: 40px;
  }
</style>
