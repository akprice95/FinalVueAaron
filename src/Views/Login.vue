<template>
    <v-container Text-xs-center>
        <v-layout justify-center>
            <v-flex xs6>
                <v-card>
                    <v-form>
                        <v-text-field
                           label="Email"
                           Placeholder="foo@bar.com">
                        </v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="Password"
                            :type="show1 ? 'text' : 'password'">
                        </v-text-field>
                    </v-form> 
                </v-card>  
            </v-flex>
            <div>
                <p>{{ email }}</p>
                <p>{{ password }}</p>
            </div>
        </v-layout>
    </v-container>

</template>

<script>
export default {
    show1: false,
    password: 'password',
    email: 'email'
}
</script>

<style scoped>

</style>
