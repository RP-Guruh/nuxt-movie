<template>
    <span :class="styleTitle">
        {{ title }}
    </span>
</template>

<script>
export default {
  props: {
    title: String,
    styleTitle: String
  }
}
</script>