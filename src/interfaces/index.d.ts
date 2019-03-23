export interface IStore {
  token: string | null;
  error: Error | null;
  user: {
    role: string | null;
  };
}
