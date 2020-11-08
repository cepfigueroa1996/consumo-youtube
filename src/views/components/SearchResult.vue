<template>
    <v-col 
        md="7"
        v-if="re != null && show == false"
    >

        <h3 class="font-weight-light subtitle-1 ml-10">
            La busqueda <strong class="font-weight-bold">{{ search }}</strong> obtuvo <strong class="font-weight-bold">{{ separador(re.pageInfo.totalResults) }}</strong> resultados
        </h3>
        <v-divider class="ml-10"></v-divider>

        <v-card
            class="mx-auto borde"
            max-width="404"
            outlined
            v-for="(r, index) in re.items" :key="index"        
        >
            <v-list-item three-line>
                <v-list-item-avatar
                    tile
                    size="100"
                    color="grey"
                >
                    <img  :src="r.snippet.thumbnails.default.url" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title 
                    class="overline ma-0 pa-0 link"
                    @click="videoSelected = r"
                    >
                    {{ r.snippet.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle> {{ r.snippet.description }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-col>
</template>

<script>



    export default {
        props:['search',  're', 'show'],
        data(){
            return{
                videoSelected:null,
            }
        },
        watch:{
            videoSelected(){
                this.update(this.videoSelected);
            }
        },
        methods:{
            separador:function(id){
                var monto = parseInt(id);
                return  monto.toLocaleString();
            },
            update(id){
                this.$store.commit('modify', id);
            }
        }
    }
</script>

<style scoped>
  .link{
    color:#C62828;
  }
  .link:hover{
    text-decoration: underline;
    cursor:pointer;
  }
  .borde{
    border-top:none;
    border-left:none;
    border-right:none;
  }
</style>