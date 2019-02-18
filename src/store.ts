import Vue from "vue";
import Vuex from "vuex";
import { IStore } from "@/interfaces";
import mutations from "@/mutations";
import actions from "@/actions";
import getters from "@/getters";

Vue.use(Vuex);

export const initialState: IStore = {
  token: localStorage.getItem("token"),
  error: null,
};

export default new Vuex.Store({
  state: initialState,
  mutations: mutations,
  actions: actions,
  getters: getters,
});
