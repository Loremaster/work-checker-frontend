import { loadMockData } from "../support";

export default {
  fetchUsers: () =>
    new Promise((resolve, reject) => {
      loadMockData("users/fetchUsers")
        .then(resolve)
        .catch(reject);
    }),
  createUser: ({ email, password, role }: { email: string; password: string; role: string }) =>
    new Promise((resolve, reject) => {
      loadMockData("users/createUser")
        .then(resolve)
        .catch(reject);
    }),
};
