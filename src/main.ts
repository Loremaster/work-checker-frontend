import Vue from "vue";
import axios from "axios";
import Notifications from "vue-notification";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vuetify";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Notifications);

Vue.config.productionTip = false;

axios.defaults.baseURL = `${process.env.VUE_APP_BACKEND_URL}/api/v1/`;

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
