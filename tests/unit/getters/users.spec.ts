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
