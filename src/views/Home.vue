<template>
  <v-container>
    <v-row>
      <v-col md="5" class="pr-0">
        <v-text-field
          outlined
          v-model="search"
          label="Buscar.."
          class="rounded-0"
        >
        </v-text-field>
      </v-col>
      <v-col md="2" class="ma-0 pl-0">
        <v-btn color="error" class="pb-7 pt-7 rounded-0" @click="results">
          <v-icon class="display-1">mdi-magnify</v-icon>
        </v-btn>
      </v-col>
      
      <play :video="$store.state.select"></play>
      <load :valor="showRe"></load>
      <search-result :search="search" :re="re" :show="showRe"></search-result>

    </v-row>
  </v-container>
</template>

<script>

  import axios from 'axios'
  import SearchResult from '@/views/components/SearchResult'
  import Load from '@/views/components/Load'
  import Play from '@/views/components/Play'

  export default {
    name: 'Home',
    components: {
       SearchResult, Load, Play
    },
    data(){
      return{
        search:null,
        re:null,
        active:null,
        showRe:false,
      }
    },

    methods:{
      results(){
          this.showRe = true;

          axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q='+this.search+'&type=video&maxResults=20&key='+this.$store.state.keyToken)
          .then(response=>{
          this.re = response.data;
          })
          .finally(()=>{
          this.showRe = false;
          })
      }
    }

  }
</script>

