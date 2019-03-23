import actions from "@/actions/authentication";
import api from "@/apis/authentication";

const commit = jest.fn();
const email = "e@mail.com";
const password = "password";

jest.mock("@/apis/authentication");

describe("authenticate", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("when server request is successful", () => {
    it("calls local storage to set token", async () => {
      const response = await api.signin({ email, password });

      await actions.authenticate({ commit }, { email, password });

      expect(localStorage.setItem).toHaveBeenLastCalledWith("token", response.data.jwt);
    });

    it("calls mutation to set token", async () => {
      const response = await api.signin({ email, password });

      await actions.authenticate({ commit }, { email, password });

      expect(commit).toHaveBeenCalledWith("setToken", response.data.jwt);
    });

    it("calls mutation to set user role", async () => {
      const response = await api.signin({ email, password });

      await actions.authenticate({ commit }, { email, password });

      expect(commit).toHaveBeenCalledWith("setUserRole", response.data.jwt);
    });

    it("calls mutation to set error to null", async () => {
      await actions.authenticate({ commit }, { email, password });

      expect(commit).toHaveBeenCalledWith("setError", null);
    });
  });

  describe("when server request raises an error", () => {
    const error = new Error("Async error");

    beforeEach(() => {
      api.signin = jest.fn().mockRejectedValueOnce(error);
    });

    it("calls local storage to remove token", async () => {
      try {
        await actions.authenticate({ commit }, { email, password });
      } catch {
        expect(localStorage.removeItem).toHaveBeenLastCalledWith("token");
      }
    });

    it("calls mutation to set token to null", async () => {
      try {
        await actions.authenticate({ commit }, { email, password });
      } catch {
        expect(commit).toHaveBeenCalledWith("setToken", null);
      }
    });

    it("calls mutation to set user role to null", async () => {
      try {
        await actions.authenticate({ commit }, { email, password });
      } catch {
        expect(commit).toHaveBeenCalledWith("setUserRole", null);
      }
    });

    it("calls mutation to set error", async () => {
      try {
        await actions.authenticate({ commit }, { email, password });
      } catch {
        expect(commit).toHaveBeenCalledWith("setError", error);
      }
    });

    it("throws error with message", async () => {
      await expect(actions.authenticate({ commit }, { email, password })).rejects.toThrow(/Async error/);
    });
  });
});

describe("setToken", () => {
  it("calls mutation to set token", () => {
    const token = "token value";
    localStorage.setItem("token", token);

    actions.setToken({ commit });

    expect(commit).toHaveBeenCalledWith("setToken", token);
  });
});

describe("setUserRole", () => {
  it("calls mutation to set user role", () => {
    const token = "token value";
    localStorage.setItem("token", token);

    actions.setUserRole({ commit });

    expect(commit).toHaveBeenCalledWith("setUserRole", token);
  });
});

describe("signOut", () => {
  it("calls local storage to remove token", () => {
    actions.signOut({ commit });

    expect(localStorage.removeItem).toHaveBeenLastCalledWith("token");
  });

  it("calls mutation to remove token", () => {
    actions.signOut({ commit });

    expect(commit).toHaveBeenCalledWith("setToken", null);
  });

  it("calls mutation to user role", () => {
    actions.signOut({ commit });

    expect(commit).toHaveBeenCalledWith("setUserRole", null);
  });
});
