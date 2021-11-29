import Vue from "vue"
import App from "./App.vue"
import chinadep from "../../dist/chinadep.umd.js"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "../../dist/chinadep.bundle.css"
import store from "./store/index"

Vue.config.productionTip = false
Vue.use(chinadep)
Vue.use(ElementUI)

new Vue({
  store,
  render: h => h(App),
}).$mount("#app")
