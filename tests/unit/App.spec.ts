import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
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
    getters = { token: jest.fn() };
  });

  const setup = () => {
    store = new Vuex.Store({ actions, getters });
    wrapper = mount(Component, {
      store,
      localVue,
      stubs: ["notifications", "router-link", "router-view"],
    });
  };

  it("renders correctly", () => {
    setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("sets token on page load", () => {
    setup();

    expect(actions.setToken).toHaveBeenCalled();
  });

  it("sets user's role on page load", () => {
    setup();

    expect(actions.setUserRole).toHaveBeenCalled();
  });

  it("renders button to sign in when user is not authenticated", () => {
    getters = { token: jest.fn().mockReturnValue(null) };
    setup();
    const button = wrapper.findAll(".v-btn__content").at(1);

    expect(button.text()).toEqual("Sign in");
  });

  it("let user sign out when authenticated", () => {
    getters = { token: jest.fn().mockReturnValue("token") };
    setup();
    const button = wrapper.findAll(".v-btn__content").at(1);

    expect(button.text()).toEqual("Sign out");

    button.trigger("click");

    expect(actions.signOut).toHaveBeenCalled();
  });
});
