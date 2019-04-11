<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex md4>
          <v-text-field
            v-model="email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            name="email"
            label="Email"
            data-vv-name="email"
            required
          />
        </v-flex>
        <v-flex md3>
          <v-text-field
            v-model="password"
            v-validate="'required|min:10'"
            :error-messages="errors.collect('password')"
            name="password"
            label="Password"
            data-vv-name="password"
            required
          />
        </v-flex>
        <v-flex md3>
          <v-select
            v-model="role"
            v-validate="'required'"
            :items="roles"
            :error-messages="errors.collect('role')"
            name="role"
            label="Role"
            data-vv-name="role"
            required
          />
        </v-flex>
        <v-flex md1>
          <v-btn @click="$emit('cancel')">Cancel</v-btn>
        </v-flex>
        <v-flex md1>
          <v-btn ref="createBtn" color="primary" @click="submit">Create</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

@Component({
  $_veeValidate: { validator: "new" },
})
export default class UsersListAdd extends Vue {
  email: string = "";
  role: string = "";
  password: string = "";
  roles: string[] = ["farmer", "admin"];

  @Action("createUser") createUser: any;

  reset() {
    this.email = "";
    this.password = "";
    this.role = "";
  }

  async submit() {
    const isValid: boolean = await this.$validator.validateAll();

    if (isValid) {
      await this.crateUser();
    }
  }

  async crateUser() {
    try {
      await this.createUser({ email: this.email, password: this.password, role: this.role });
      this.reset();
      this.$emit("created");
    } catch (e) {
      const errorsData: { [k: string]: string[] } = e.response.data;

      for (const [field, messages] of Object.entries(errorsData)) {
        const message: string = messages.join(", ");
        this.errors.add({ field, msg: message });
      }
    }
  }
}
</script>
