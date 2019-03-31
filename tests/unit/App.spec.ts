import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import Component from "@/App.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

Vue.use(Vuetify);

let actions: any;
let getters: any;
let store: any;
let wrapper: any;

describe("App.vue", () => {
  beforeEach(() => {
    actions = { setToken: jest.fn(), setUserRole: jest.fn(), signOut: jest.fn() };
    getters = { signedIn: () => true, isAdmin: () => false };
  });

  const setup = async () => {
    store = new Vuex.Store({ actions, getters });
    wrapper = mount(Component, {
      store,
      localVue,
      stubs: ["notifications", "router-link", "router-view"],
    });

    await flushPromises();

    return wrapper;
  };

  it("renders correctly", async () => {
    await setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("sets token on page load", async () => {
    await setup();

    expect(actions.setToken).toHaveBeenCalled();
  });

  it("sets user's role on page load", async () => {
    await setup();

    expect(actions.setUserRole).toHaveBeenCalled();
  });

  describe("user is not signed in", () => {
    it("renders button to sign in", async () => {
      getters = { signedIn: () => false };
      await setup();
      const button = wrapper.findAll(".v-btn__content").at(1);

      expect(button.text()).toEqual("Sign in");
    });
  });

  describe("user signed in", () => {
    beforeEach(async () => {
      getters = { signedIn: () => true, isAdmin: () => false };
      await setup();
    });

    it("let user sign out", () => {
      const button = wrapper.findAll(".v-btn__content").at(1);

      expect(button.text()).toEqual("Sign out");

      button.trigger("click");

      expect(actions.signOut).toHaveBeenCalled();
    });
  });

  describe("admin signed in", () => {
    beforeEach(async () => {
      getters = { signedIn: () => true, isAdmin: () => true };
      await setup();
    });

    it("let to see list of users", () => {
      const button = wrapper.findAll(".v-btn__content").at(1);

      expect(button.text()).toEqual("Users");
    });
  });
});
