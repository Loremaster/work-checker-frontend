import { shallowMount } from "@vue/test-utils";
import Component from "@/views/Users.vue";
import UsersList from "@/components/UsersList.vue";

describe("Authentication.vue", () => {
  const setup = () => {
    return shallowMount(Component);
  };

  it("renders correctly", () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders UsersList component", () => {
    const wrapper = setup();
    const signin = wrapper.find(UsersList);

    expect(signin.is(UsersList)).toEqual(true);
  });
});
