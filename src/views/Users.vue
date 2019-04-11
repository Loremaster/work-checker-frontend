<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-if="!creating" md2 offset-md10 class="text-xs-right">
        <v-btn ref="showForm" v-if="!creating" color="primary" class="mr-0" @click="creating = true">
          Add user
        </v-btn>
      </v-flex>
      <v-flex v-if="creating" md12>
        <users-list-add @created="closeForm" @cancel="closeForm" />
      </v-flex>
      <v-flex md12>
        <users-list />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersList from "@/components/UsersList.vue";
import UsersListAdd from "@/components/UsersListAdd.vue";

@Component({
  components: {
    UsersList,
    UsersListAdd,
  },
})
export default class Users extends Vue {
  creating: boolean = false;

  closeForm() {
    this.creating = false;
  }
}
</script>
