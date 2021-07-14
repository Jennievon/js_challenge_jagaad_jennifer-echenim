<template>
  <div
    class="notification-response"
    :class="{
      success: status === 'success',
      danger: status === 'danger',
    }"
  >
    <button class="close-btn" @click="$emit('closeModal')">
      <img src="~/assets/images/close-icon.svg" alt="close icon" />
    </button>
    <img
      v-if="status === 'danger'"
      src="~/assets/images/notification-failed.svg"
      alt="notification success icon"
    />
    <img
      v-if="status === 'success'"
      src="~/assets/images/notification-success.svg"
      alt="notification success icon"
    />
    <div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator'

export default class Products extends Vue {
  @Prop(String) readonly status!: string
  @Prop(String) readonly message!: string
}
</script>

<style lang="scss" scoped>
.notification-response {
  position: fixed;
  background: #fafafe;
  box-shadow: 0px 10px 25px rgba(190, 184, 208, 0.08);
  border-radius: 10px;
  top: 35px;
  right: 20px;
  width: 300px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  z-index: 20;
  button {
    padding: 0;
    background: transparent;
    .close-btn {
      position: absolute;
      right: 5px;
      top: 0;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
  }

  h4 {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  & > img {
    margin-right: 11px;
  }

  &.danger {
    border-bottom: 3px solid #ff3d3d;
  }

  &.success {
    border-bottom: 3px solid #00d68f;
  }

  @media (max-width: 800px) {
    width: 150px;
    padding: 10px;
    h4 {
      font-size: 14px;
    }
    p {
      font-size: 10px !important;
    }
  }
}
</style>
