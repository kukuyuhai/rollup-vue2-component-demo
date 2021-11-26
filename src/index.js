import { install } from "./install";
const unionComp = {};
unionComp.install = install;

console.log(window.Vue);
if (window.Vue) {
  window.Vue.use(unionComp);
}
