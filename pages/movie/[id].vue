<template>
    <NuxtLayout :name="layout">
        
        <div class="max-w-sm overflow-hidden shadow-lg">
            <img class="3w-full" :src="'https://image.tmdb.org/t/p/original' + detail.backdrop_path"
                alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-lg text-white mb-2">{{ detail.original_title }}</div>
                <div class="mb-4 flex">
                    <div>
                        <img src="@/assets/icons/hd.png">
                    </div>
                    <div class="ml-4">
                        <img src="@/assets/icons/popularity.png">
                    </div>
                    <div class="ml-4 -mt-1">
                        <span class="font-bold text-xs text-white">{{ detail.popularity }}</span>
                    </div>
                </div>

                <span v-for="genre in detail.genres"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2">{{
                        genre.name }}</span>

                <div class="grid grid-rows-2 grid-flow-col mt-2 mb-6">
                    <div><span class="font-medium text-xs text-white">Duration</span></div>
                    <div><span class="font-medium text-xs text-white">{{ detail.runtime }} Minutes </span></div>

                    <div><span class="font-medium text-xs text-white">Language</span></div>
                    <div><span class="font-medium text-xs text-white">{{ detail.original_language }} </span></div>

                    <div><span class="font-medium text-xs text-white">Released</span></div>
                    <div><span class="font-medium text-xs text-white">{{ detail.release_date }} </span></div>

                </div>

                <div>
                    <span class="font-semibold text-xl text-white">Description</span>
                    <p class="text-sm text-white text-justify mt-4">{{ detail.overview }} </p>
                </div>

                <div class="mt-6">
                    <span class="font-semibold text-xl text-white">Cast</span>
                    <v-slide-group v-model="model" class="" selected-class="bg-success">
                        <v-slide-group-item>
                            <SliderMovie v-for="actrees in cast"
                                :src="'https://image.tmdb.org/t/p/original' + actrees.profile_path" width="60"
                                aspectRatio="1/1">
                            </SliderMovie>
                         
                        </v-slide-group-item>
                    </v-slide-group>

                </div>

                <div class="mt-6">
                    <span class="font-semibold text-xl text-white">Production</span>
                    <v-slide-group v-model="model" class="" selected-class="bg-success">
                        <v-slide-group-item>
                            <SliderMovie v-for="production in detail.production_companies"
                                :src="'https://image.tmdb.org/t/p/original' + production.logo_path" width="60"
                                aspectRatio="1/1">
                            </SliderMovie>
                        </v-slide-group-item>
                    </v-slide-group>

                </div>


            </div>
            
        </div>
    </NuxtLayout>
</template>



<script>
export default {

  data() {
    return {
      layout: "detail",
      route: useRoute(),
      url: "https://api.themoviedb.org/3/movie/" + this.$route.params.id,
      model: null,
      detail: [],
      cast: []
    };
  },
  mounted() {
    this.fetchDetail();
    this.fetchCast();
  },
  methods: {
    async fetchDetail() {
      const response = await fetch(this.url + "?api_key=bc314325812ae6422923ca1895764357&language=en-US");
      const data = await response.json();
      this.detail = data;
    },

    async fetchCast() {
      const response = await fetch(this.url + "/credits?api_key=bc314325812ae6422923ca1895764357&language=en-US");
      const data = await response.json();
      this.cast = data.cast;
    },
  },
};
</script>
