import { IStore, IUserList } from "@/interfaces";
import Vue from "vue";

const setUsers = (state: IStore, users: IUserList[]) => {
  Vue.set(state, "users", users);
};

const addUser = (state: IStore, user: IUserList) => {
  const users: IUserList[] = state.users ? state.users.concat(user) : [];

  Vue.set(state, "users", users);
};

export default {
  setUsers,
  addUser,
};
