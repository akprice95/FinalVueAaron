<template>
    <Div>
        <div>
            <div>
                <h1>
                    <div>
                        <label>Username</label>
                        <input class="form-control" type="text" v-model="user.username">
                    </div>
                    <div>
                        <label>Mail</label>
                        <input class="form-control" type="text" v-model="user.email">
                        <button class="btn btn-primary" @click="submit">Submit</button>
                          <button @click="fetchData">Get Data</button>
                          <ul>
                            <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email}}</li>

                          </ul>
                    </div>
                </h1>
            </div>
        </div>
    </Div>
</template>

<script>
import { films } from '../assets/films'
import { starships } from '../assets/starships'
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    };
  },
  methods:{
    submit() {
      this.$http.post('https://vuejs-test-f75d2.firebaseio.com/data.json', this.user)
.then(response => {
  console.log(response)
  }, error => {
    console.log(error);
  });
},
fetchData() {
  this.$http.get('https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}')
  .then(response => {
        return response.json();
       })
       .then(data => console.log(data));
}
  }
}
</script>

<style>
</style>