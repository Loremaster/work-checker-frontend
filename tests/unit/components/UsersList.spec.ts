import { mount, createLocalVue } from "@vue/test-utils";
import { IUserList } from "@/interfaces";
import { insertDataAppDiv } from "../helpers/vuetify-helper";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
import Component from "@/components/UsersList.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

Vue.use(Vuetify);

let getters: any;
let actions: any;
let store: any;
let wrapper: any;

describe("UsersList.vue", () => {
  beforeEach(() => {
    actions = { fetchUsers: jest.fn() };
    getters = { users: () => [] };
  });

  const setup = () => {
    insertDataAppDiv();
    store = new Vuex.Store({ actions, getters });
    wrapper = mount(Component, { store, localVue });
  };

  it("renders correctly", () => {
    setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("fetches users", () => {
    setup();

    expect(actions.fetchUsers).toHaveBeenCalledWith(expect.anything(), undefined, undefined);
  });

  it("renders users", () => {
    const users: IUserList[] = [{ id: 1, email: "some@user.com", role: "admin" }];
    getters = { users: () => users };
    setup();

    expect(wrapper.text()).toContain("some@user.com");
    expect(wrapper.text()).toContain("admin");
  });
});
