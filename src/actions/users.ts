import { Commit } from "vuex";
import { IUserList } from "@/interfaces";
import api from "@/apis/users";

const fetchUsers = async ({ commit }: { commit: Commit }) => {
  const response = await api.fetchUsers();
  const users: IUserList[] = response.data;

  commit("setUsers", users);
};

export default {
  fetchUsers,
};
