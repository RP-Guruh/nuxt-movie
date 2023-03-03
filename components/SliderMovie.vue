<template>

            <v-img :width="width" :class="['ma-2', selectedClass]" aspect-ratio="aspectRatio">
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