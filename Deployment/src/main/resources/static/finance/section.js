
import Vue from 'vue'
import App from './section.vue'

// dev
import VueTableDynamic from 'vue-table-dynamic'
// prod
// import VueTableDynamic from '../../'

Vue.use(VueTableDynamic)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})