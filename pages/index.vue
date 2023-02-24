<template>
    <div>
        <v-layout>
            <v-app-bar :elevation="1" border="0" color="#191a26" density="compact" prominent>
                <template v-slot:prepend>
                    <img src="@/assets/icons/netflix.png">
                </template>
                <template v-slot:append>

                    <v-app-bar-nav-icon color="white" class="pr-3" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <img class="rounded-full" src="https://i.pravatar.cc/35">
                </template>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="bottom" temporary>
                <v-list :items="items"></v-list>
            </v-navigation-drawer>

            <v-main>
                <v-container fluid>

                    <div class="justify-start mb-16 select-none flex">
                        <a href="#"
                            class="focus:bg-indigo-600 focus:font-thin focus:text-white focus:rounded-full py-2 px-4 no-underline font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">All</a>
                        <a href="#"
                            class="focus:bg-indigo-600 focus:font-thin focus:text-white focus:rounded-full py-2 px-4 no-underline font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Movie</a>
                        <a href="#"
                            class="focus:bg-indigo-600 focus:font-thin focus:text-white focus:rounded-full py-2 px-4 no-underline font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Series</a>
                        
                    </div>



                    <v-row dense>
                        <v-col v-for="n in 8" :key="n" cols="4">
                            <v-sheet color="grey-lighten-2" height="96"></v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>


            <v-bottom-navigation :elevation="2" grow dark>
                <v-btn value="recent">
                    <v-icon>mdi-history</v-icon>

                    Recent
                </v-btn>

                <v-btn value="favorites">
                    <v-icon>mdi-heart</v-icon>

                    Favorites
                </v-btn>

                <v-btn value="nearby">
                    <v-icon>mdi-map-marker</v-icon>

                    Nearby
                </v-btn>
            </v-bottom-navigation>
        </v-layout>

    </div>
</template>

<style>
a {
    color: #696e82;
    font-family: 'Poppins', sans-serif;
}
</style>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>