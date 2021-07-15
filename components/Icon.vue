<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <!-- <g :fill="iconColor"> -->
    <slot />
    <!-- </g> -->
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: '0 0 18 18',
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
})
</script>
