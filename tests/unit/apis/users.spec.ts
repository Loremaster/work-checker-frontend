import axios from "axios";
import api from "@/apis/users";

jest.mock("axios");

describe("fetchUsers", () => {
  it("fetches users", () => {
    api.fetchUsers();

    expect(axios.get).toHaveBeenCalledWith("users");
  });
});

describe("createUser", () => {
  it("creates user", () => {
    const email = "email@user.com";
    const password = "password";
    const role = "farmer";

    api.createUser({ email, password, role });

    expect(axios.post).toHaveBeenCalledWith("users", { user: { email, password, role } });
  });
});
