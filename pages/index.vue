<template>
  <NuxtLayout>
    <v-main>
      <v-container fluid>
        <div class="justify-start mb-4 select-none flex -ml-3">
          <NuxtLink to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            All</NuxtLink>
          <NuxtLink to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            Movie</NuxtLink>
          <NuxtLink to="#"
            class="focus:bg-indigo-600 focus:font-semibold focus:text-white focus:rounded-full py-2 px-4 no-underline font-bold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            Series</NuxtLink>
        </div>

        <TitleSection styleTitle="text-white font-semibold text-lg tracking-wide" title="Trending Movies"> </TitleSection>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <v-slide-group v-model="model" class="" selected-class="bg-success">
            <v-slide-group-item v-for="n in 15" :key="n">
              <NuxtLink v-for="movie in movies" :key="movie.id" :to="`/movie/${movie.id}`">
                <SliderMovie :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" width="200"
                  aspectRatio="1/1">

                </SliderMovie>
                <v-card-title class="text-white text-caption font-weight-bold" v-text="movie.title"></v-card-title>
              </NuxtLink>

            </v-slide-group-item>
          </v-slide-group>
        </v-lazy>

        <div class="mt-4">
          <TitleSection styleTitle="text-white font-semibold text-lg tracking-wide" title="Watching Now"> </TitleSection>
          <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
            <v-slide-group v-model="model" class="" selected-class="bg-success">
              <v-slide-group-item v-for="n in 15" :key="n">
                <NuxtLink v-for="movie in watchingNow" :key="movie.id" :to="`/movie/${movie.id}`">
                  <SliderMovie :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" width="373"
                    aspectRatio="16/9">
                  </SliderMovie>
                </NuxtLink>
              </v-slide-group-item>
            </v-slide-group>
          </v-lazy>

        </div>

        <div class="mt-4">
          <TitleSection styleTitle="text-white font-semibold text-lg tracking-wide" title="Top Ten TV Series">
          </TitleSection>
          <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
            <v-slide-group v-model="model" class="" selected-class="bg-success">
              <v-slide-group-item>
                <NuxtLink v-for="movie in tvSeries" :key="movie.id" :to="`/tv/${movie.id}`">
                  <SliderMovie :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" width="200" aspectRatio="1/1">

                  </SliderMovie>
                  <v-card-title class="text-white text-subtitle-2 font-weight-bold" v-text="movie.name"></v-card-title>
                </NuxtLink>
              </v-slide-group-item>
            </v-slide-group>
          </v-lazy>
        </div>


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
      watchingNow: [],
      tvSeries: [],
      model: null,
    };
  },
  mounted() {
    this.fetchMoviesPopular();
    this.fetchMoviesWatchingNow();
    this.fetchTVSeriesPopular();

  },
  methods: {
    async fetchMoviesPopular() {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=bc314325812ae6422923ca1895764357"
      );
      const data = await response.json();
      this.movies = data.results;
    },

    async fetchMoviesWatchingNow() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=bc314325812ae6422923ca1895764357&language=en-US&page=1&region=ID"
      );
      const data = await response.json();
      this.watchingNow = data.results;
    },

    async fetchTVSeriesPopular() {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=bc314325812ae6422923ca1895764357&language=en-US&page=1"
      );
      const data = await response.json();
      this.tvSeries = data.results;
    },
  },
};
</script>
