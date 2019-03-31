<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md10>
        <users-list />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersList from "@/components/UsersList.vue";

@Component({
  components: {
    UsersList,
  },
})
export default class Users extends Vue {}
</script>
