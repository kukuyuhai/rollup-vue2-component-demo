import { install } from "./install";
const unionComp = {};
unionComp.install = install;

if (window.Vue) {
  window.Vue.use(unionComp);
}
