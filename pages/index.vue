<template>
  <NuxtLayout>
    <v-main>
      <v-container fluid>
        <div class="justify-start mb-4 select-none flex -ml-3">
          <NuxtLink
            to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
          >
            All</NuxtLink
          >
          <NuxtLink
            to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
          >
            Movie</NuxtLink
          >
          <NuxtLink
            to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
          >
            Series</NuxtLink
          >
        </div>

        <!-- TRENDING NOW -->
        <div>
          <span class="font-semibold text-lg text-white tracking-wide"
            >Trending Now</span
          >
        </div>

        <v-slide-group v-model="model" class="" selected-class="bg-success">
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            v-slot="{ isSelected, toggle, selectedClass }"
          >
            <v-img
              v-for="movie in movies"
              :key="movie.id"
              :width="200"
              :class="['ma-2', selectedClass]"
              aspect-ratio="1/1"
              :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
            >
              <v-card-title
                class="text-white text-subtitle-2 font-weight-bold"
                v-text="movie.title"
              ></v-card-title>
            </v-img>
          </v-slide-group-item>
        </v-slide-group>

        <WatchingNow></WatchingNow>
      </v-container>
    </v-main>
  </NuxtLayout>
</template>

<style>
a {
  color: #696e82;
  font-family: "Segoe UI", sans-serif;
}

span {
  font-family: "Poppins", sans-serif;
}
</style>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      movies: [],
      model: null,
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=bc314325812ae6422923ca1895764357"
      );
      const data = await response.json();
      this.movies = data.results;
    },
  },
};
</script>
