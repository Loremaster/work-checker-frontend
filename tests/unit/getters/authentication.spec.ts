import getters from "@/getters/authentication";
import { initialState } from "@/store";

describe("token", () => {
  it("returns token", () => {
    const state = { ...initialState, token: "token" };

    expect(getters.token(state)).toEqual("token");
  });
});

describe("errorMessage", () => {
  it("returns error when it exists", () => {
    const error = new Error("Error occured");
    const state = { ...initialState, error: error };

    expect(getters.errorMessage(state)).toEqual("Error occured");
  });

  it("returns empty string when error doesn't exist", () => {
    const state = { ...initialState, error: null };

    expect(getters.errorMessage(state)).toEqual("");
  });
});
