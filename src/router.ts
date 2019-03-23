import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
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

// Allow users to access routes based on role and authentication requirement.
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const token = window.localStorage.getItem("token");
    const userRole = window.localStorage.getItem("userRole");

    if (!token) {
      return next({ name: "authentication" });
    } else if (!to.meta.roles.includes(userRole)) {
      return next({ name: "home" });
    }

    next();
  } else {
    next();
  }
});

export default router;
