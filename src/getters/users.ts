import { IStore, IUserList } from "@/interfaces";

const users = (state: IStore): IUserList[] => state.users || [];

const isAdmin = (state: IStore): boolean => state.user.role === "admin";

export default {
  users,
  isAdmin,
};
