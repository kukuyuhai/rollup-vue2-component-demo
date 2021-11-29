<template>
  <div
    class="code-mirror"
    :class="[
      {
        'code-mirror__edit': edit,
      },
      extraClass,
    ]"
  >
    <codemirror
      ref="CodeMirror"
      class="editor"
      :value="code"
      @input="handleInput"
      :options="mergeOptions"
    />
  </div>
</template>
<script>
import { codemirror } from "vue-codemirror"
// import jsonlint from "jsonlint"
// import "codemirror/lib/codemirror.css"
// import "codemirror/mode/javascript/javascript"
// import "codemirror/addon/selection/active-line"
// import "codemirror/keymap/sublime"
// import "codemirror/mode/css/css"
// import "codemirror/theme/monokai.css"
// import "codemirror/addon/lint/lint"
// import "codemirror/addon/lint/lint.css"
// import "codemirror/addon/lint/json-lint"
// import "codemirror/addon/display/autorefresh"
// // require('codemirror/mode/css/css')
// // require('codemirror/theme/monokai.css')
// // require('codemirror/addon/lint/lint.js')
// // require('codemirror/addon/lint/lint.css')
// // require('codemirror/addon/lint/json-lint.js')
// // require('codemirror/addon/display/autorefresh.js')
// window.jsonlint = jsonlint
export default {
  mame: "Codemirror",
  components: {
    codemirror,
  },
  model: {
    prop: "code",
    event: "input",
  },
  props: {
    code: {
      default: () => {
        return ""
      },
    },
    mode: {
      type: String,
      default: "application/json",
    },
    options: {
      type: Object,
      default: () => {},
    },
    extraClass: String,
    edit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mergeOptions: function () {
      return Object.assign({}, this.defaultOption(), this.options)
    },
    codemirror() {
      return this.$refs.CodeMirror.codemirror
    },
  },
  methods: {
    defaultOption() {
      return {
        mode: this.mode,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        // theme: "monokai",
        // viewportMargin: Infinity,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        styleActiveLine: false,
        highlightDifferences: true,
        keyMap: "sublime",
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        lint: true,
        autoRefresh: true,
        readOnly: false,
      }
    },
    handleInput(value) {
      this.$emit("input", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.code-mirror {
  border: 1px solid #dfe6ec;
  box-sizing: border-box;

  &__edit {
    ::v-deep {
      .CodeMirror {
        height: 300px !important;
      }
    }
  }
  ::v-deep {
    .CodeMirror {
      height: auto;
      font-family: monospace;
      font-size: 12px;
      line-height: 150%;
    }
  }
}
</style>
