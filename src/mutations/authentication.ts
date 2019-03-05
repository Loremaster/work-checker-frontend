import { IStore } from "@/interfaces";

const setToken = (state: IStore, token: string) => {
  state.token = token;
};

export default {
  setToken,
};
