import mutations from "@/mutations/users";
import { initialState } from "@/store";

describe("setToken", () => {
  it("sets token", () => {
    const users = [{ id: 1, email: "user@email.com", role: "admin" }];

    mutations.setUsers(initialState, users);

    expect(initialState.users).toEqual(users);
  });
});

describe("addUser", () => {
  it("adds user", () => {
    const user = { id: 1, email: "user@email.com", role: "admin" };

    mutations.addUser(initialState, user);

    expect(initialState.users).toContain(user);
  });
});
