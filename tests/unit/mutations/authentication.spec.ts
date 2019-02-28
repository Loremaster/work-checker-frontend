import mutations from "@/mutations/authentication";
import { initialState as state } from "@/store";

describe("setToken", () => {
  it("sets token", () => {
    const token = "token";
    mutations.setToken(state, token);
    expect(state.token).toEqual(token);
  });
});
