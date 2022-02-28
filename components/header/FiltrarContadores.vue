<template>
  <div class="filtros a-center w-100-resp">
    <div class="form-group">
      <label for="filtros">Filtros</label>
      <select v-model="operador" name="filtros" id="filtros">
        <option value="" selected>Seleccione filtro</option>
        <option value="<">Menor que</option>
        <option value="<=">Menor o igual que</option>
        <option value=">">Mayor que</option>
        <option value=">=">Mayor o igual que</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["getSessionStorage"]),
    operador: {
      get() {
        return this.getSessionStorage.filtro?.operador;
      },
      set(value) {
        this.updateFiltroValue({ nombre: "operador", operador: value });
      },
    },
  },
  methods: {
    ...mapMutations(["updateFiltroValue"]),
  },
  created() {
    let filtro = this.getSessionStorage.filtro?.operador;
    if (!filtro) {
      this.updateFiltroValue({ nombre: "operador", operador: "" });
    }
  },
};
</script>
