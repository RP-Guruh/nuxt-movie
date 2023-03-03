<template>
  <span class="font-semibold text-lg text-white tracking-wide"
    >Release Now</span
  >
  <v-slide-group v-model="model" class="" selected-class="bg-success">
    <v-slide-group-item
      v-for="n in 15"
      :key="n"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-img
        v-for="movie in release_now"
        :key="movie.id"
        :width="373"
        aspect-ratio="16/9"
        cover
        :class="['ma-2', selectedClass]"
        :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
      >
        <v-card-title
          class="text-white text-subtitle-2 font-weight-bold"
          v-text="movie.title"
        ></v-card-title>
      </v-img>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      release_now: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=bc314325812ae6422923ca1895764357&language=en-US&page=1&region=ID"
      );
      const data = await response.json();
      this.release_now = data.results;
    },
  },
};
</script>
