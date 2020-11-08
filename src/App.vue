<template>
  <v-app>
    <v-app-bar
      app
      color="error"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        href="https://developers.google.com/youtube/v3" 
      >
        <span class="mr-2">API-YOUTUBE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <vertical-menu></vertical-menu>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import VerticalMenu from '@/components/VerticalMenu'

  export default {
    components:{ VerticalMenu },
    name: 'App',
    data(){
      return{
 
      }
    }
  };
</script>
