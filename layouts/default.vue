<template>
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

        <slot />

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
</template>

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
        group() {
            this.drawer = false
        },
    },
}
</script>