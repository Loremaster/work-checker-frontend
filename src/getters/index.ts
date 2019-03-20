import authenticationGetters from "./authentication";
import userGetters from "./users";

export default {
  ...authenticationGetters,
  ...userGetters,
};
