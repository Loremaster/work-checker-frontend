export interface IStore {
  token: string | null;
  error: Error | null;
  user: {
    role: string | null;
  };

  users?: IUserList[];
}

export interface IUserList {
  id: number;
  role: string;
  email: string;
}
