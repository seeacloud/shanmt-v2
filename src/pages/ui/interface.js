import Vue from 'vue'
import iView from 'iview'
import InterfaceItem from './InterfaceItem.vue'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {InterfaceItem}
})

