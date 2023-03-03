<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.original_title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      movies: [],
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
