import axios from "axios";

const fetchUsers = () => axios.get("users");

export default {
  fetchUsers,
};
