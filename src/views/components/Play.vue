<template>
    <v-col 
    md="5"
    
    >
    <v-navigation-drawer
        absolute
        permanent
        right
        class="grey lighten-3"
    >
        <v-card
        class="mr-0 pr-0 grey lighten-3 fixed"
        elevation="0"
        v-if="videoSelected != null"
        
        >
        <LazyYoutubeVideo
            :src="'https://www.youtube.com/embed/'+videoSelected.id.videoId"
            preview-image-size="maxresdefault"
        />
        <v-card-title>
        <v-chip color="error">
            <v-icon left>
            mdi-face
            </v-icon>
            {{ videoSelected.snippet.channelTitle }}
        </v-chip>
            {{ videoSelected.snippet.title }}
        </v-card-title>

        <v-card-text>
            {{ videoSelected.snippet.description }}
        </v-card-text>

        </v-card>

        <v-card
        class="mx-auto borde"
        max-width="404"
        outlined
        v-if="ca != null"      
        >
        <v-list-item three-line v-for="c in ca.items" :key="c.id" >
            <v-list-item-avatar
            tile
            size="100"
            color="grey"
            >
            <img  :src="c.snippet.thumbnails.default.url" />
            </v-list-item-avatar>
            <v-list-item-content>
            <v-list-item-title 
                class="overline ma-0 pa-0 link"
                @click="videoSelected = c"
            >
            {{ c.snippet.title }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ c.snippet.description }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        </v-card>
    </v-navigation-drawer>

    </v-col>
</template>

<script>
    import axios from 'axios'
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'
    import 'vue-lazy-youtube-video/dist/style.css'

    export default {
        components:{ LazyYoutubeVideo },
        props:['video'],
        data(){
            return{
                ca:null,
                videoSelected:null,
            }
        },
        watch:{
            video() {
                this.videoSelected = this.$store.state.select;
                this.canal(this.videoSelected.snippet.channelId);
            }
        },
        methods:{
            canal(id){
                axios.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId='+id+'&key='+this.$store.state.keyToken)
                .then(response=>{
                this.ca = response.data;
                })
            },

        }
    }
</script>