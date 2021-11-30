import CodemirrorTab from "./modules/http/CodemirrorTab.vue"
import HttpSection from "./modules/http/HttpSection.vue"
import HttpUri from "./modules/http/HttpUri.vue"
import RequestMeta from "./modules/http/RequestMeta.vue"
import RequestDescription from "./modules/http/RequestDescription.vue"
// common
import AutoFillTable from "./modules/common/AutoFillTable.vue"
import Breadcrumb from "./modules/common/Breadcrumb.vue"
import SearchItem from "./modules/common/SearchItem.vue"
// import TryUseModal from "./modules/common/TryUseModal.vue"
import CommonPanel from "./modules/common/CommonPanel.vue"

const components = [
  HttpSection,
  RequestMeta,
  CodemirrorTab,
  HttpUri,
  RequestDescription,
  AutoFillTable,
  Breadcrumb,
  CommonPanel,
  SearchItem,
  // TryUseModal,
]

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
  HttpSection,
  RequestMeta,
  CodemirrorTab,
  HttpUri,
  RequestDescription,
  AutoFillTable,
  Breadcrumb,
  CommonPanel,
  SearchItem,
  // TryUseModal,
}
