import resolve from "@rollup/plugin-node-resolve"
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import alias from "@rollup/plugin-alias"
import css from "rollup-plugin-css-only"
import json from "@rollup/plugin-json"

import { getBabelOutputPlugin } from "@rollup/plugin-babel"
// import pkg from "./package.json"

const config = {
  input: "./src/index.js", // 必须，入口文件
  output: [
    {
      file: "lib/chinadep.cjs.js",
      format: "cjs",
      exports: "default",
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
      },
    },
    {
      file: "lib/chinadep.umd.js",
      format: "umd",
      name: "chinadep",
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
        clipboard: "clipboard",
        vue: "vue",
      },
    },
    {
      file: "lib/chinadep.min.js",
      format: "iife",
      name: "chinadep",
      plugins: [terser()],
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
        clipboard: "clipboard",
        vue: "vue",
      },
    },
    {
      file: "lib/chinadep.esm.js",
      format: "esm",
      exports: "default",
    },
  ],
  external: ["vue", "clipboard", "vuex", "element-ui", "jsonlint", "vue-codemirror", "lodash"],
  plugins: [
    json(),
    // 引入的插件在这里配置
    resolve({
      preferBuiltins: true,
      extensions: [".tsx", ".ts", ".jsx", ".js", ".vue"],
    }),
    commonjs(),
    vue({
      css: false,
      compileTemplate: true,
      target: "browser",
    }),
    css({ output: "chinadep.bundle.css" }),
    babel({
      babelHelpers: "runtime",
      extensions: [".tsx", ".ts", ".jsx", ".js", ".vue"],
      exclude: ["**/node_modules/**"],
    }),
    // alias
    alias({
      entries: [
        { find: "@", replacement: "./src" },
        {
          find: "@modules",
          replacement: "./src/modules",
        },
      ],
    }),
  ],
}

export default config
