import { IStore } from "@/interfaces";

const token = (state: IStore): string | null => state.token;
const errorMessage = (state: IStore): string => {
  const error = state.error;

  if (error) {
    return error.message;
  } else {
    return "";
  }
};
const signedIn = (state: IStore): boolean => typeof state.token === "string";

export default {
  token,
  errorMessage,
  signedIn,
};
