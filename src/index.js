import CodemirrorTab from "./modules/http/CodemirrorTab.vue"
import HttpSection from "./modules/http/HttpSection.vue"
import HttpUri from "./modules/http/HttpUri.vue"
import RequestMeta from "./modules/http/RequestMeta.vue"
import RequestDescription from "./modules/http/RequestDescription.vue"

const components = [HttpSection, RequestMeta, CodemirrorTab, HttpUri, RequestDescription]

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
  // http description
  HttpSection,
  RequestMeta,
  CodemirrorTab,
  HttpUri,
  RequestDescription,
}
