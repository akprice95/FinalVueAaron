<template>
  <v-container id="dropdown-example" grid-list-xl>
    <v-layout row wrap>
      
      <v-toolbar>
        <v-flex xs12 sm3>
          <v-select v-model="Platform" :items="items" label="Platform"></v-select>
        </v-flex>
        <v-text-field v-model.trim="Username" label="Username" single-line></v-text-field>
        <button @click="fetchData">Get Data</button>
      </v-toolbar>
        <v-flex v-for="(Player,index)  in playerStats" :key="index" xs3>
          <v-card>
       <v-card-text>   
    <p class="heading"> {{Player.key}}</p>
    <p class="score">{{Player.value}}</p>
    <p></p>
       </v-card-text>
          </v-card>
        </v-flex>
    
        
    </v-layout>
  </v-container>

  
</template>


<script>

// @ is an alias to /src

export default {
  name: "home",
    data: () => ({
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
      console.log(this.playerStats)
    })
    .then(data => console.log(data) )
  }
}
}
//https://cors-anywhere.herokuapp.com/
</script>

<style>
.heading{
  font: 24px;
  color: green;
}
</style>
