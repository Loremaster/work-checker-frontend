import { loadMockData } from "../support";

export default {
  fetchUsers: () =>
    new Promise((resolve, reject) => {
      loadMockData("users/fetchUsers")
        .then(resolve)
        .catch(reject);
    }),
};
