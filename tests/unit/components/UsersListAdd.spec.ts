import { mount, createLocalVue } from "@vue/test-utils";
import { insertDataAppDiv } from "../helpers/vuetify-helper";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import Component from "@/components/UsersListAdd.vue";
import VeeValidate from "vee-validate";

const localVue = createLocalVue();
const $validator = new VeeValidate.Validator();
const email = "user@email.com";
const password = "password12345";
const role = "admin";

localVue.use(Vuex);

Vue.use(Vuetify);
Vue.use(VeeValidate);

let actions: any;
let store: any;
let wrapper: any;

describe("UsersListAdd.vue", () => {
  beforeEach(() => {
    actions = { createUser: jest.fn() };
  });

  const setup = () => {
    insertDataAppDiv();
    store = new Vuex.Store({ actions });

    wrapper = mount(Component, {
      store,
      localVue,
      sync: false,
      provide: () => ({ $validator }),
    });
  };

  it("renders correctly", () => {
    setup();

    expect(wrapper).toMatchSnapshot();
  });

  it("submits form", async () => {
    setup();

    await submit({ email, password, role });

    expect(actions.createUser).toHaveBeenCalledWith(expect.anything(), { email, password, role }, undefined);
  });

  it("emits created event", async () => {
    setup();

    await submit({ email, password, role });

    expect(wrapper.emitted().created).toBeTruthy();
  });

  it("renders server errors", async () => {
    const error: any = new Error("Async error");
    error.response = { data: { email: ["must be unique"] } };
    actions.createUser = jest.fn().mockRejectedValue(error);
    setup();

    await submit({ email, password, role });

    expect(wrapper.html()).toContain("must be unique");
  });
});

async function submit({ email, password, role }: { email: string; password: string; role: string }) {
  wrapper.find("input[name='email']").setValue(email);
  wrapper.find("input[name='password']").setValue(password);
  wrapper.find("input[name='role']").setValue(role);
  wrapper.find({ ref: "createBtn" }).trigger("click");

  await flushPromises();
}
