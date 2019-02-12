<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <signin />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Signin from "@/components/Signin.vue";

@Component({
  components: {
    Signin,
  },
})
export default class Authentication extends Vue {}
</script>
