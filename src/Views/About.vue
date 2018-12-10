<template>
<v-container grid-list-xl>
<v-layout>
        <v-flex xs12 sm3>
        <v-card>
          <v-card-title>
            <div>
              {{ this.$store.state.storeUsername }}
            </div>
          </v-card-title>
        </v-card>
          <v-card v-for="(Player, index) in this.$store.state.playerStatsArray" :key="index">
           <v-card-text>
           <p class="heading"> {{Player.key}}</p>
           <p class="score">{{Player.value}}</p>
           </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm3>
        <v-card>
          <v-card-title>
            <div v-aaron>
              {{ this.$store.state.storeUsername2 }}
            </div>
          </v-card-title>
        </v-card>
          <v-card v-for="(Player, index) in this.$store.state.playerStatsArray2" :key="index">
           <v-card-text>
           <p class="heading"> {{Player.key}}</p>
           <p class="score">{{Player.value}}</p>
           </v-card-text>
          </v-card>
        </v-flex>
        </v-layout>
</v-container>
</template>

<script>
import Home from './Home.vue';

export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("https://vuejs-test-f75d2.firebaseio.com/data.json", this.user)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    },
    fetchData() {
      fetch(
          "https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}"
        )
        .then(response => {
          return response.json();
        })
        .then(data => console.log(data));
    }
  }
};
</script>

<style>
</style>
