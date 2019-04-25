import { Commit } from "vuex";
import { IUserList } from "@/interfaces";
import api from "@/apis/users";

const fetchUsers = async ({ commit }: { commit: Commit }) => {
  const response = await api.fetchUsers();
  const users: IUserList[] = response.data;

  commit("setUsers", users);
};

const createUser = async (
  { commit }: { commit: Commit },
  { email, password, role }: { email: string; password: string; role: string },
) => {
  const response = await api.createUser({ email, password, role });
  const user: IUserList = response.data;

  commit("addUser", user);
};

export default {
  fetchUsers,
  createUser,
};
