import { IStore, IUserList } from "@/interfaces";
import Vue from "vue";

const setUsers = (state: IStore, users: IUserList[]) => {
  Vue.set(state, "users", users);
};

export default {
  setUsers,
};
