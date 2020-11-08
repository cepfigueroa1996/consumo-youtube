<template>
      <v-col 
        md="7" 
        v-if="valor == true"
      >
        <v-skeleton-loader
    
          type="article"
          v-for="ar in 4"
          :key="ar"
        ></v-skeleton-loader>
      </v-col>
</template>

<script>
    export default {
        props:[ 'valor']  
    }
</script>