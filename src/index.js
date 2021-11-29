import LoginBox from "./login.vue"
// import CodemirrorTab from "./modules/http/CodemirrorTab.vue"
import HttpSection from "./modules/http/HttpSection.vue"
// import HttpUri from "./modules/http/HttpUri.vue"
import RequestMeta from "./modules/http/RequestMeta.vue"

const components = [LoginBox, HttpSection, RequestMeta]

const install = (Vue, options = {}) => {
  components.forEach(comp => {
    Vue.component(comp.name, comp)
  })
  // 注册其他
  console.log(options)
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version: "1.0.0",
  CodemirrorTab,
}
