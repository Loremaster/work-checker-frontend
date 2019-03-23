import { Commit } from "vuex";
import api from "@/apis/authentication";

const authenticate = async (
  { commit }: { commit: Commit },
  { email, password }: { email: string; password: string },
) => {
  try {
    const response = await api.signin({ email, password });
    const token: string = response.data.jwt;

    localStorage.setItem("token", token);
    commit("setToken", token);
    commit("setUserRole", token);
    commit("setError", null);
  } catch (e) {
    localStorage.removeItem("token");
    commit("setToken", null);
    commit("setUserRole", null);
    commit("setError", e);
    throw e;
  }
};

const setToken = ({ commit }: { commit: Commit }) => {
  const token = localStorage.getItem("token");
  commit("setToken", token);
};

const setUserRole = ({ commit }: { commit: Commit }) => {
  const token = localStorage.getItem("token");
  commit("setUserRole", token);
};

const signOut = ({ commit }: { commit: Commit }) => {
  localStorage.removeItem("token");
  commit("setToken", null);
  commit("setUserRole", null);
};

export default {
  authenticate,
  setToken,
  setUserRole,
  signOut,
};
