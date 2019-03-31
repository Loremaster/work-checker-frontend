import { IStore } from "@/interfaces";
import authenticationMutations from "./authentication";
import usersMutations from "./users";

const setError = (state: IStore, error: Error) => {
  state.error = error;
};

export default {
  setError,
  ...authenticationMutations,
  ...usersMutations,
};
