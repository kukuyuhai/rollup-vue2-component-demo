import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import dict from "@/utils/dict";

const store = new Vuex.Store({
  //   modules,
  state: {
    dict_json: {
      dataType: [{ label: "1" }],
    },
  },
  getters: {
    dict_json: (state) => new dict(state.dict_json),
  },
});

export default store;
