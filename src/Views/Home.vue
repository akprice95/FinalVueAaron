<template>

  <v-container id="dropdown-example" grid-list-xl>
    <v-layout row wrap>

      
     


 
    <v-toolbar>
       <v-flex xs12 sm3>
         <v-overflow-btn
          :items="dropdown_font"
          label="Platform"
          target="#dropdown-example"
        ></v-overflow-btn>
       </v-flex>

      <v-text-field
      label="Username"
      hide-details
        
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>Search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  
   </v-layout>
        </v-container>
</template>

<script>



// @ is an alias to /src

export default {
  name: "home",
  
    data: () => ({
      dropdown_font: ['Xbox', 'Playstation', 'PC'],
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
    })
  }
</script>