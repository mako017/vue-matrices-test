import Vue from "vue";
import Vuex from "vuex";
import instructions from "@/store/modules/instructions";
import items from "@/store/modules/items";
import participant from "@/store/modules/participant";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    instructions,
    items,
    participant,
  },
});
