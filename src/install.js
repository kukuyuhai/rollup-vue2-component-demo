import LoginBox from "./login.vue";

export function install(Vue, options) {
  Vue.component(LoginBox.name, LoginBox);
}

class union {
  constructor() {
    this.appId = "";
    this.appName = "";
  }
  login(callback) {
    typeof callback === "function" && callback();
  }
}

window.union = new union();
