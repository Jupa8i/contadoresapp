<template>
  <div>
    <div class="form-group">
      <label for="suma_contadores">Suma contadores ({{ getLocalStorage.contadores.length | NUM }}) </label>
      <input
        v-model="getSumaContadores"
        readonly
        type="text"
        id="suma_contadores"
        class="input-small"
        placeholder="Total"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getSumaContadores", "getLocalStorage"]),
  },
};
</script>
