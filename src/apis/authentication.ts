import axios from "axios";

const signin = ({ email, password }: { email: string; password: string }) =>
  axios.post("user_token", { auth: { email, password } });

export default {
  signin,
};
