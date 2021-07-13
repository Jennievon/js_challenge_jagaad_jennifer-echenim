<template>
  <footer>
    <nav class="container">
      <div class="brand">
        <h3 class="brand-title">FOOTER</h3>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
})
</script>


<style lang="scss" scoped>
footer {
  height: 60px;
}
nav {
  background: var(--color-white);
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    &-title {
      letter-spacing: 1.37px;
    }
  }
}
</style>