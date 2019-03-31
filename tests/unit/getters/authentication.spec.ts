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
    const error = new Error("Error occurred");
    const state = { ...initialState, error: error };

    expect(getters.errorMessage(state)).toEqual("Error occurred");
  });

  it("returns empty string when error doesn't exist", () => {
    const state = { ...initialState, error: null };

    expect(getters.errorMessage(state)).toEqual("");
  });
});

describe("signedIn", () => {
  it("returns true token contains string", () => {
    const state = { ...initialState, token: "token" };

    expect(getters.signedIn(state)).toEqual(true);
  });

  it("returns true when token contains null", () => {
    const state = { ...initialState, token: null };

    expect(getters.signedIn(state)).toEqual(false);
  });
});
