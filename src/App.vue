<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign in</router-link>
    </v-toolbar>

    <v-content>
      <notifications />
      <router-view />
    </v-content>
  </v-app>
</template>
