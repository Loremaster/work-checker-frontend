import mutations from "@/mutations/users";
import { initialState } from "@/store";

describe("setToken", () => {
  it("sets token", () => {
    const users = [{ id: 1, email: "user@email.com", role: "admin" }];

    mutations.setUsers(initialState, users);

    expect(initialState.users).toEqual(users);
  });
});
