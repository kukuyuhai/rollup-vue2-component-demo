import resolve from "@rollup/plugin-node-resolve"
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import alias from "@rollup/plugin-alias"
import css from "rollup-plugin-css-only"
import json from "@rollup/plugin-json"
// import pkg from "./package.json"

const config = {
  input: "./src/index.js", // 必须，入口文件
  output: [
    {
      file: "dist/chinadep.cjs.js",
      format: "cjs",
      exports: "default",
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
      },
    },
    {
      file: "dist/chinadep.umd.js",
      format: "umd",
      name: "chinadep",
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
      },
    },
    {
      file: "dist/chinadep.min.js",
      format: "iife",
      name: "chinadep",
      plugins: [terser()],
      globals: {
        lodash: "lodash",
        vuex: "vuex",
        "vue-codemirror": "vue-codemirror",
      },
    },
    {
      file: "dist/chinadep.esm.js",
      format: "esm",
      exports: "default",
    },
  ],
  external: ["vuex", "element-ui", "jsonlint", "vue-codemirror", "lodash"],
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
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "bundled",
    }),
    css({ output: "chinadep.bundle.css" }),
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
