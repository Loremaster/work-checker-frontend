import { IStore, IUserList } from "@/interfaces";

const users = (state: IStore): IUserList[] => state.users || [];

export default {
  users,
};
