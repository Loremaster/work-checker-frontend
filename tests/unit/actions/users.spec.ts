import actions from "@/actions/users";
import api from "@/apis/users";

const commit = jest.fn();

jest.mock("@/apis/users");

describe("fetchUsers", () => {
  describe("when server request is successful", () => {
    it("calls mutation to set token", async () => {
      const response = await api.fetchUsers();

      await actions.fetchUsers({ commit });

      expect(commit).toHaveBeenCalledWith("setUsers", response.data);
    });
  });

  describe("when server request raises an error", () => {
    const error = new Error("Async error");

    beforeEach(() => {
      api.fetchUsers = jest.fn().mockRejectedValueOnce(error);
    });

    it("throws error with message", async () => {
      await expect(actions.fetchUsers({ commit })).rejects.toThrow(/Async error/);
    });
  });
});

describe("createUser", () => {
  const email = "email@user.com";
  const password = "password";
  const role = "farmer";

  describe("when server request is successful", () => {
    it("calls mutation to set token", async () => {
      const response = await api.createUser({ email, password, role });

      await actions.createUser({ commit }, { email, password, role });

      expect(commit).toHaveBeenCalledWith("addUser", response.data);
    });
  });

  describe("when server request raises an error", () => {
    const error = new Error("Async error");

    beforeEach(() => {
      api.createUser = jest.fn().mockRejectedValueOnce(error);
    });

    it("throws error with message", async () => {
      await expect(actions.createUser({ commit }, { email, password, role })).rejects.toThrow(/Async error/);
    });
  });
});
