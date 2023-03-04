<template>
    <v-img :width="width" :class="['ma-2']" aspect-ratio="aspectRatio">
        <slot />
    </v-img>
    
</template>

<script>
export default {
    data() {
        return {
            model: null
        }
    },
    props: {
        width: String,
        aspectRatio: String,
        imgSource: String
    }
}
</script>