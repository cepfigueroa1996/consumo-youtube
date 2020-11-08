<template>
    <v-container>
        <v-row  class="pa-10">
            <v-col md="9">
                <h1 class="font-weight-thin">Documentaciòn</h1>
                <v-divider></v-divider>
            </v-col>
            <v-col md="7" class="ml-5">
                <span class="font-weight-regular ">
                    &nbsp;Este simple reproductor de videos fue realizado usando la API que nos brinda youtube
                    para ello lo unico que vamos a requerir es dirigirnos al link que tenemos en la parte superior
                    derecha del menu y hacer clic alli.
                    <br><br>
                    &nbsp;Una vez accedamos a la documentaciòn lo primero que vamos a necesitar  es una API KEY la cual
                    nos la brinda la API de youtube, cuando tengamos nuestra api nos vamos a dirigir a la ruta de nuestro
                    vuex y modificaremos la siguiente linea.
                </span>
            </v-col>
            <v-col md="7" class="grey lighten-3 ml-5 rounded-lg" >
                <strong> 
                    RUTA: /src/store/index.js<br>
                </strong>
                <code>
                    keyToken:['API KEY'] <small>//alli registraremos nuestra clave API</small>
                </code>
            </v-col>
            <v-col md="7" class="ml-5">
                <v-divider></v-divider>
                <span class="font-weight-regular ">
                    <br>
                    La estructura del proyecto  esta regida bajo componentes, donde cada componente
                    tiene una funciòn en particular, el componente en el que deriva el resto en este caso 
                    sera el Home.vue, desde ahi estaremos llamando 3 componentes:
                </span>
            </v-col>
            
            <v-col md="7" class="grey lighten-3 ml-5 rounded-lg" >
                <strong> 
                    RUTA: /src/views/components/Load.vue<br>
                </strong>
                <small>
                    El codigo que veremos en este template es un <code>v-skeleton-loader</code>
                    el cual se activara cada vez que se este cargando la lista de resultados 
                    por medio de la variable <code>showRe</code> la cual enviamos como un parametro,
                    su uso entra en acciòn en el constructor de promesas del metodo <code>results()</code>
                    donde una vez inicia el metodo la variable adquiere un valor <code>true</code>
                    y cuando llega al <code>Finally</code> cambia a <code>false</code>
                </small>
            </v-col>

            <v-col md="7" class="grey lighten-3 ml-5 rounded-lg mt-10" >
                <strong> 
                    RUTA: /src/views/components/SearchResult.vue<br>
                </strong>
                <small>
                    El componente <code>SearchResult</code> se encarga de recibir y renderizar la vista
                    de videos que tengan coincidencias enviadas desde el campo <code>search</code>
                    dentro del componente recibe 3 parametros  entre ellos el <code>re</code> que es un 
                    arreglo con la informaciòn obtenida desde la API, los parametros lo puedes conseguir
                    en la linea <code>props:['search',  're', 'show']</code>
                </small>
            </v-col>

            <v-col md="7" class="grey lighten-3 ml-5 rounded-lg mt-10" >
                <strong> 
                    RUTA: /src/views/components/Play.vue<br>
                </strong>
                <small>
                    Por ultimo el componente <code>Play</code> sera el encargado de recibir un arreglo
                    con la informaciòn del video seleccionado por medio de la propiedad <code>video</code>
                    podras observar un reproductor de video  junto a los datos del video, mas abajo veras
                    una lista de reproducciòn la cual es llamada desde el metodo <code>canal()</code> este metodo
                    recibe un parametro desde un <code>watch</code>  donde se encargara de buscar el id de ese canal
                    y renderizara mas videos de esa lista de reproducciòn en caso de poseerla.
                </small>
            </v-col>
        </v-row>
    </v-container>
</template>