<template>
  <v-container id="dropdown-example" grid-list-xl>
    <v-layout row wrap>

      <v-toolbar>
        <v-flex xs12 sm3>
          <v-select v-model="Platform" :items="items" label="Platform"></v-select>
        </v-flex>
        <v-text-field v-model.trim="Username" label="Username" single-line></v-text-field>
        <button @click="fetchData">Get and store stats</button>
      </v-toolbar>
        <v-flex v-for="(Player,index)  in playerStats" :key="index" xs3>
          <v-card class="v-card-animation">
           <v-card-text>
            <p class="heading"> {{Player.key}}</p>
            <p class="score">{{Player.value}}</p>

            <p></p>
           </v-card-text>
          </v-card>

        </v-flex>

        <button class="save-stats" @click="compareData" v-show="hasStats">Compare Stats
       </button>
    </v-layout>
  </v-container>


</template>


<script>

// @ is an alias to /src

export default {
  name: "home",
    data: () => ({
      hasStats: false,
      playerStats : null,
      info : null,
      Username: "",
      Platform: "",
      Key: "7152cd0a-ff37-4945-b2ac-ea8d1c4f3fe2",
      items: ['xbox', 'psn', 'pc'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ]
    }),
methods:{
    fetchData() {
      this.hasStats = true;
      let APICall = ('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/' + this.Platform + '/' + this.Username)
      let request = new Request(APICall,{
	method: 'GET',
	headers: new Headers({
		'TRN-Api-Key': '7152cd0a-ff37-4945-b2ac-ea8d1c4f3fe2'
	})
})
  fetch(request)
  .then(response => {
      return response.json()
    })
    .then(response =>{
      this.playerStats = response.lifeTimeStats
      this.$store.state.playerStatsArray = this.playerStats;
      this.$store.state.storeUsername = this.Username;
      console.log(this.$store.state.storeUsername);
    })
    .then(data => console.log(data) )

  },
  compareData(){
  let APICall = ('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/' + this.Platform + '/' + this.Username)
  let request = new Request(APICall,{
  method: 'GET',
  headers: new Headers({
  'TRN-Api-Key': '7152cd0a-ff37-4945-b2ac-ea8d1c4f3fe2'
  })
  })
  fetch(request)
  .then(response => {
  return response.json()
  })
  .then(response =>{
  this.playerStats = response.lifeTimeStats;
  this.$store.state.playerStatsArray2 = this.playerStats;
  this.$store.state.storeUsername2 = this.Username;
  console.log(this.$store.state.playerStatsArray2);
  })
  .then(data => console.log(data) )
  }
}
}
//https://cors-anywhere.herokuapp.com/
</script>

<style>
.heading{
 text-align: center;
 font-weight: bold;
 text-transform: uppercase;
 font-size: 13px;
 color: #09eae2;
 text-shadow: 2px 3px 6px #000000;
}

.score{
 text-align: center;
   font-size: 28px;
   font-weight: bold;
   text-shadow: 2px 8px 10px #000000;
}

.v-card-animation{
 -webkit-transition: width 2s, height 2s; /* For Safari 3.1 to 6.0 */
 transition: width 2s, height 2s;
 box-shadow: 10px 10px 12px #000000;
}

.v-card-animation:hover{
 background-color: #09eae229 !important;
 width: 102%;
 height: 102%;

}
</style>
