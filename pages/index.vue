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

        <!-- TRENDING NOW -->
        <div>
          <span class="font-semibold text-lg text-white tracking-wide">Trending Now</span>
        </div>

       
          <v-slide-group v-model="model" class="" selected-class="bg-success">
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="red" :class="['ma-4', selectedClass]" height="200" width="100" @click="toggle">
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
       

        <v-row dense class="mt-4">
          <v-col v-for="n in 8" :key="n" cols="4">
            <v-sheet color="grey-lighten-2" height="96"></v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </NuxtLayout>
</template>

<style>
a {
  color: #696e82;
  font-family: 'Segoe UI', sans-serif;
}

span {
  font-family: 'Poppins', sans-serif;
}
</style>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

