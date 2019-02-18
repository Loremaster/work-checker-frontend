import { IStore } from "@/interfaces";
import authenticationMutations from "./authentication";

const setError = (state: IStore, error: Error) => {
  state.error = error;
};

export default {
  setError,
  ...authenticationMutations,
};
