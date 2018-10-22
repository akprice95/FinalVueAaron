<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
<v-app>
  <v-navigation-drawer app>Nav</v-navigation-drawer>
  <v-toolbar app>Toolbar</v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>Footer</v-footer>
</v-app>


<script>
export default {
  
}
</script>

<stylescoped>

</style>
