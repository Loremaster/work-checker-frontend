import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import UsersList from "@/components/UsersList.vue";
import UsersListAdd from "@/components/UsersListAdd.vue";
import Component from "@/views/Users.vue";

Vue.use(Vuetify);

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

  describe("UsersListAdd", () => {
    it("renders component on click add button", () => {
      const wrapper = setup();

      wrapper.find({ ref: "showForm" }).vm.$emit("click");
      const usersListAdd = wrapper.find(UsersListAdd);

      expect(usersListAdd.is(UsersListAdd)).toEqual(true);
    });

    it("hides component on created event", () => {
      const wrapper = setup();
      wrapper.setData({ creating: true });
      const usersListAdd = wrapper.find(UsersListAdd);

      usersListAdd.vm.$emit("created");

      expect(wrapper.find(UsersListAdd).exists()).toEqual(false);
    });

    it("hides component on cancel event", () => {
      const wrapper = setup();
      wrapper.setData({ creating: true });
      const usersListAdd = wrapper.find(UsersListAdd);

      usersListAdd.vm.$emit("cancel");

      expect(wrapper.find(UsersListAdd).exists()).toEqual(false);
    });
  });
});
