import Vue from "vue";
import Vuetify, { VFlex, VLayout, VContainer, VImg } from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: { VFlex, VLayout, VContainer, VImg },
  theme: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
  customProperties: true,
  iconfont: "md",
});
