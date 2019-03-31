<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn v-if="!signedIn" flat to="/signin">Sign in</v-btn>
        <v-btn v-if="signedIn" flat to="/users">Users</v-btn>
        <v-btn v-if="signedIn" flat @click="signOut">Sign out</v-btn>
      </v-toolbar-items>
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

  @Getter("signedIn") signedIn!: boolean;

  async created() {
    // set store values after refresh
    await this.setToken();
    this.setUserRole();
  }
}
</script>
