<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn> |
      <v-btn v-if="!token" to="/signin">Sign in</v-btn>
      <v-btn v-else @click="signOut">Sign out</v-btn>
    </v-toolbar>

    <v-content>
      <notifications />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

@Component
export default class App extends Vue {
  @Action("setToken") setToken: any;
  @Action("setUserRole") setUserRole: any;
  @Action("signOut") signOut: any;

  @Getter("token") token!: string | null;

  created() {
    // set store values after refresh
    this.setToken();
    this.setUserRole();
  }
}
</script>
