<template>

  <v-container id="dropdown-example" grid-list-xl>
    <v-layout row wrap>
    <v-toolbar>
       <v-flex xs12 sm3>
         <v-select
         v-model="Platform"
          :items="dropdown_font"
          label="Platform"
        ></v-select>
       </v-flex>
      <v-text-field
      v-model.trim="Username"
      label="Username"
        single-line
      ></v-text-field>
  <button @click="fetchData">Get Data</button>
    </v-toolbar>
   </v-layout>
        </v-container>
</template>
<script>



// @ is an alias to /src

export default {
  name: "home",
  
    data: () => ({
      info : null,
      Username: "",
      Platform: null,
      Key: "7152cd0a-ff37-4945-b2ac-ea8d1c4f3fe2",
      dropdown_font: ['xbox', 'Playstation', 'PC'],
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
  this.$http.get('http://api.fortnitetracker.com/v1/profile/{'+ this.Platform +'}/{'+ this.Username +'}',
 { headers:{
   
    Authorization: "Basic 7152cd0a-ff37-4945-b2ac-ea8d1c4f3fe2"
  }
 }
  )
  .then(response => {
    this.info = response;
        return response.json();
       })
}
  }
}

</script>