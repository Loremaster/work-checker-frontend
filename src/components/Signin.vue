<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email" />
        <v-text-field prepend-icon="lock" name="password" label="Password" type="password" v-model="password" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" class="submit" @click="login" :disabled="disabled">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Signin extends Vue {
  email: string = "";
  password: string = "";
  disabled: boolean = false;

  @Action("authenticate") authenticate: any;

  async login() {
    try {
      this.disabled = true;
      await this.authenticate({ email: this.email, password: this.password });
      this.$router.push("/");
    } catch (e) {
      this.$notify({
        type: "error",
        title: "Authentication",
        text: "Can't sign in. Please make sure your login and password are correct",
      });
    } finally {
      this.disabled = false;
    }
  }
}
</script>
