import { IStore } from "@/interfaces";
import jwt from "jsonwebtoken";

const userRole = (state: IStore): string | null => {
  if (!state.token) {
    return null;
  }

  const userData = jwt.decode(state.token);

  if (userData instanceof Object) {
    return userData.role;
  } else {
    return null;
  }
};

export default {
  userRole,
};
