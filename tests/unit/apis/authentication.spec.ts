import axios from "axios";
import api from "@/apis/authentication";

jest.mock("axios");

describe("signin", () => {
  it("posts credentials to server", () => {
    const credentials = { email: "user@mail.com", password: "password1" };

    api.signin(credentials);

    expect(axios.post).toHaveBeenCalledWith("user_token", { auth: credentials });
  });
});
