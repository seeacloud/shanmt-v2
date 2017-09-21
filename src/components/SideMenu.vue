<template>
  <div class="container">
    <router-link v-for="(item, index) in links" :to="item.url" class="menu-item" :key="index">
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
  export default{
    name: 'sidemenu',
    props: ['links'],
    data () {
      return {
      }
    },
    methods: {}
  }
</script>


<style lang="scss" scoped="true">
  @import '../../static/common';

  .menu-head {
    color: #ffffff;
    padding: 20px 15px;
    border-bottom: 1px solid #ffffff;
    font-size: 18px;
  }

  .container {
    background: #ffffff;
    /*-webkit-box-shadow: 1px 1px 10px #cccccc;*/
    /*-moz-box-shadow: 1px 1px 10px #cccccc;*/
    /*box-shadow: 1px 1px 10px #cccccc;*/
    margin-bottom: 20px;
  }

  .con-fixed {
    position: fixed;
    top: 20px;
    z-index: 100;
  }

  .menu-item {
    position: relative;
    display: block;
    border-bottom: 1px solid #ffffff;
    padding: 12px 15px;
    font-size: 16px;
    color: #666666;
    background: #eeeeee;

    i {
      position: absolute;
      right: 10px;
      display: inline-block;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      -moz-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
      font-size: 12px;
      color: #999999;
    }
  }

  .menu-item:hover {
    background: $blue;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    i {
      color: #ffffff;
    }
  }

  .menu-item:last-child {
    border-bottom: 1px solid #ffffff;
  }

  .menu-item:last-child:hover {
    border-bottom: 1px solid #ffffff;
  }

  .no-bdr {
    border: none;
  }

  .active {
    background: $blue;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
  }

  .router-link-active
  {
    background: $blue;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
  }
</style>
