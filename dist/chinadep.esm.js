import _ from 'lodash';
import { mapGetters } from 'vuex';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: "LoginBox",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!!");
    },
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "loginBox form" }, [
    _c("div", { staticClass: "form-item" }, [
      _c("label", { attrs: { for: "username" } }, [_vm._v("用户名：")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.user.username,
            expression: "user.username",
          },
        ],
        attrs: { name: "username", autocomplete: false },
        domProps: { value: _vm.user.username },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.user, "username", $event.target.value);
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-item" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("用户名：")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.user.password,
            expression: "user.password",
          },
        ],
        attrs: { name: "password", autocomplete: false },
        domProps: { value: _vm.user.password },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.user, "password", $event.target.value);
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-item" }, [
      _c("button", { on: { click: _vm.onSubmit } }, [_vm._v("登录")]),
    ]),
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script$1 = {
  name: "HttpSection",
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: [Array, Object, String, Boolean],
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    data: {
      handler() {
        if (!this.disabled) {
          this.visible = true;
        }
      },
      immediate: true,
    },
  },
  computed: {
    disabled() {
      if (_.isArray(this.data)) {
        if (this.data.length) {
          return false
        }
        return true
      } else {
        return _.isEmpty(this.data)
      }
    },
  },
  methods: {
    changeVisible() {
      // 如果是禁用状态，不显示内容
      if (this.disabled) {
        this.visible = false;
        return
      }
      this.visible = !this.visible;
    },
  },
};

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.disabled
    ? _c(
        "div",
        { staticClass: "section" },
        [
          _c(
            "div",
            { staticClass: "sub-title", on: { click: _vm.changeVisible } },
            [
              !_vm.disabled
                ? _c("span", {
                    class: !_vm.visible ? "arrow-right" : "arrow-bottom",
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.title))]),
            ]
          ),
          _vm._v(" "),
          _vm._t("default", null, { data: _vm.data, visible: _vm.visible }),
        ],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = "data-v-08d377c8";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script = {
  name: "HttpHeader",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-table",
    {
      staticStyle: { width: "100%" },
      attrs: { data: _vm.data, "header-cell-style": { background: "#fafafa" } },
    },
    [
      _c("el-table-column", {
        attrs: { label: "参数名称", align: "center", prop: "name" },
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          label: "必填",
          width: "120",
          align: "center",
          prop: "required",
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (scope) {
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(scope.row.required == "1" ? "必填" : "非必填") +
                    "\n    "
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { label: "类型", align: "center", prop: "type" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (scope) {
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      _vm.dict_json.getLabel("paramsTypes", scope.row.type)
                    ) +
                    "\n    "
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: {
          label: "描述",
          align: "center",
          prop: "description",
          width: "300",
        },
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { label: "示例值", align: "center", prop: "simple" },
      }),
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var components = [__vue_component__$2, __vue_component__$1, __vue_component__];

var install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  components.forEach(function (comp) {
    Vue.component(comp.name, comp);
  }); // 注册其他

  console.log(options);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

var index = {
  install: install,
  version: "1.0.0"
};

export { index as default };
