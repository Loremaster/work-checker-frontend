import getters from "@/getters/users";
import { initialState } from "@/store";

describe("token", () => {
  it("returns users list", () => {
    const users = [{ id: 1, email: "user@email.com", role: "admin" }];
    const state = { ...initialState, users };

    expect(getters.users(state)).toEqual(users);
  });

  it("returns empty array when there are no users", () => {
    const state = { ...initialState, users: undefined };

    expect(getters.users(state)).toEqual([]);
  });
});

describe("isAdmin", () => {
  it("returns true when role is admin", () => {
    const state = { ...initialState, user: { role: "admin" } };

    expect(getters.isAdmin(state)).toEqual(true);
  });

  it("returns false when role is not admin", () => {
    const state = { ...initialState, user: { role: "some" } };

    expect(getters.isAdmin(state)).toEqual(false);
  });

  it("returns false when role is null", () => {
    const state = { ...initialState, user: { role: null } };

    expect(getters.isAdmin(state)).toEqual(false);
  });
});
