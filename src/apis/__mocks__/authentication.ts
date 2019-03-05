import { loadMockData } from "../support";

export default {
  signin: () =>
    new Promise((resolve, reject) => {
      loadMockData("authentication/signin")
        .then(resolve)
        .catch(reject);
    }),
};
