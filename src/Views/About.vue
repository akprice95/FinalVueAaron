<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { films } from '../assets/films'
import { starships } from '../assets/starships'
export default {
  data: function() {
    return {
      allFilms: films,
      starships,
    }
  },
}
</script>

<style>
</style>