import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "*", component: NotFound },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signin",
      name: "authentication",
      component: () => import(/* webpackChunkName: "authentication" */ "./views/Authentication.vue"),
    },
  ],
});
