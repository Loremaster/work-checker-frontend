import { IStore } from "@/interfaces";
import jwt from "jsonwebtoken";

const setToken = (state: IStore, token: string | null) => {
  state.token = token;
};

const setUserRole = (state: IStore, token: string | null) => {
  let role: string | null = null;

  if (token) {
    const userData = jwt.decode(token);
    role = userData instanceof Object ? userData.role : null;
  }

  state.user.role = role;
  role ? localStorage.setItem("userRole", role) : localStorage.removeItem("userRole");
};

export default {
  setToken,
  setUserRole,
};
