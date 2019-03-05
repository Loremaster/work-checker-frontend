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
    commit("setError", null);
  } catch (e) {
    localStorage.removeItem("token");
    commit("setToken", null);
    commit("setError", e);
    throw e;
  }
};

const fetchToken = ({ commit }: { commit: Commit }) => {
  const token = localStorage.getItem("token");
  commit("setToken", token);
};

export default {
  authenticate,
  fetchToken,
};
