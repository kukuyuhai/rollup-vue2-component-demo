import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";

const config = {
  input: "./src/index.js", // 必须，入口文件
  output: [
    { file: "dist/lib.umd.js", format: "umd" },
    { file: "dist/lib.min.js", format: "cjs", plugins: [terser()] },
    { file: "dist/lib.esm.js", format: "esm" },
  ],
  external: ["vue"],
  plugins: [
    livereload(),
    serve({
      open: true, // 自动打开页面
      port: 8080,
      openPage: "/index.html", // 打开的页面
      contentBase: "",
    }),
    // 引入的插件在这里配置
    resolve(),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      target: "browser",
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "bundled",
    }),
  ],
};

export default config;
