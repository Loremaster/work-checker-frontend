<template>
  <v-data-table :headers="headers" :items="users" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.role }}</td>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { IUserList } from "@/interfaces";

@Component
export default class UsersList extends Vue {
  headers = [{ text: "Email", value: "email" }, { text: "Role", value: "role" }];

  @Action("fetchUsers") fetchUsers: any;

  @Getter("users") users!: IUserList;

  async created() {
    await this.fetchUsers();
  }
}
</script>
