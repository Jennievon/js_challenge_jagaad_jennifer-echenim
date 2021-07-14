<template>
  <svg v-html="require(`~/assets/images/${name}-icon.svg`)" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>
