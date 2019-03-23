import mutations from "@/mutations/authentication";
import { initialState } from "@/store";

describe("setToken", () => {
  it("sets token", () => {
    const token = "token";

    mutations.setToken(initialState, token);

    expect(initialState.token).toEqual(token);
  });
});

describe("setUserRole", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("token is blank", () => {
    const token = null;

    it("sets user's role to null", () => {
      const state = { ...initialState, user: { role: "some" } };

      mutations.setUserRole(state, token);

      expect(state.user.role).toBeNull();
    });

    it("removes user's role from localstorage", () => {
      localStorage.setItem("userRole", "admin");

      mutations.setUserRole(initialState, token);

      expect(localStorage.removeItem).toHaveBeenLastCalledWith("userRole");
    });
  });

  describe("token is not a valid one", () => {
    const token = "invalid token";

    it("sets user's role to null", () => {
      const state = { ...initialState, user: { role: "some" } };

      mutations.setUserRole(state, token);

      expect(state.user.role).toBeNull();
    });

    it("removes user's role from localstorage", () => {
      localStorage.setItem("userRole", "admin");

      mutations.setUserRole(initialState, token);

      expect(localStorage.removeItem).toHaveBeenLastCalledWith("userRole");
    });
  });

  describe("valid token", () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjEyMzQsImlkIjoxLCJyb2xlIjoiYWRtaW4ifQ.QzOnDjT2ECz8WoojpoXxIT86nJh2TCJizbzhqBfjv44";

    it("sets user's role to null", () => {
      const state = { ...initialState, user: { role: null } };

      mutations.setUserRole(state, token);

      expect(state.user.role).toEqual("admin");
    });

    it("sets user's role in localstorage", () => {
      mutations.setUserRole(initialState, token);

      expect(localStorage.setItem).toHaveBeenLastCalledWith("userRole", "admin");
    });
  });
});
