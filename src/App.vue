<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app>

      <!--nav-->
      <v-list id="nav" dense>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
              <router-link to="/">Home</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
             <router-link to="/about">About</router-link>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile >
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Login">Login</router-link>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
             <router-link to="/layout">Layout</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
          <!--nav-->


    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>MoneyHUNGRY</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                slot="activator"
                :href="source"
                icon:
                large
                target="_blank"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer id="daFooter" app >
      <span center>&copy; Aaron Price 2018</span>
    </v-footer>
  </v-app>
</template>


<script>
 export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Layout',
        'Login'
      ]
    }),
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }

  }
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b5186;
  margin-top: 60px;

}
#nav {
 color: blue;
}

.daFooter{
  align-content: center;
}
</style>
