import authenticationGetters from "./authentication";
import usersGetters from "./users";

export default {
  ...authenticationGetters,
  ...usersGetters,
};
