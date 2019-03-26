import axios from "axios";
import api from "@/apis/users";

jest.mock("axios");

describe("users", () => {
  it("fetches users", () => {
    api.fetchUsers();

    expect(axios.get).toHaveBeenCalledWith("users");
  });
});
