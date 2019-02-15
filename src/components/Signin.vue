<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email" />
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="signin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import api from "@/apis/authentication";

@Component
export default class Signin extends Vue {
  email: string = "";
  password: string = "";

  async signin() {
    const response = await api.signin({ email: this.email, password: this.password });
    localStorage.setItem("token", response.data.jwt);
  }
}
</script>
