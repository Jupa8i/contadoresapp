<template>
  <div class="error-container">
    <transition name="slide-fade">
      <span v-show="error" class="invalid-feedback">{{ error }}</span>
    </transition>

    <span v-if="!error" class="invalid-feedback"></span>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
.invalid-feedback {
  width: 100%;
  height: 16.63px !important;
  text-align: left;
  display: block;

  font-size: 0.875em;
  color: #dc3545;
  margin-top: 3px;
}
</style>
