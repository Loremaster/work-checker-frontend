import axios from "axios";

const fetchUsers = () => axios.get("users");
const createUser = ({ email, password, role }: { email: string; password: string; role: string }) =>
  axios.post("users", { user: { email, password, role } });

export default {
  fetchUsers,
  createUser,
};
