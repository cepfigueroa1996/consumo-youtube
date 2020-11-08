<template>
    <v-navigation-drawer
    absolute
    class="grey lighten-4"
    v-model="drawer"
    :mini-variant="mini"
    permanent
    
    >

    <v-divider></v-divider>

    <v-list dense class="mt-15" >
        <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
        >
        <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        </v-list-item>
    </v-list>
    </v-navigation-drawer>    
</template>

<script>
    export default {
        data(){
            return{
                drawer: true,
                items: [
                { title: 'Home', icon: 'mdi-play', route:'/' },
                { title: 'My Account', icon: 'mdi-book', route:'/document' },
                ],
                mini: true,     
            }
        }
    }
</script>