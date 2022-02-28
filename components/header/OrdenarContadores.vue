<template>
  <div class="d-flex a-center w-100-resp">
    <div class="form-group mr-1-desk d-none-resp">
      <span class="operador-filtro"> {{ getSessionStorage.filtro.operador }} </span>
    </div>
    <div class="form-group mr-1-desk">
      <label for="numero_filtro">Número filtro</label>
      <input
        v-model="valor"
        @keypress="onlyNumber"
        type="number"
        id="numero_filtro"
        class="count-number"
        min="0"
        max="20"
        maxlength="3"
        placeholder="Número"
      />
    </div>
    <div class="form-group mr-1-desk">
      <label for="buscador">Buscador</label>
      <input
        v-model="search"
        type="text"
        id="buscador"
        maxlength="30"
        placeholder="Buscar por nombre o número"
      />
    </div>

    <div class="form-group" v-tooltip="'Limpiar filtros (sessionStorage)'">
      <a @click="clearSessionStorage_" class="btn btn-primary btn-small btn-header-clear">
        <fa icon="eraser" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { onlyNumber } from "@/utils/helpers";
export default {
  computed: {
    ...mapGetters(["getSessionStorage"]),
    valor: {
      get() {
        return this.getSessionStorage.filtro?.valor;
      },
      set(value) {
        this.updateFiltroValue({ nombre: "valor", operador: value });
      },
    },
    search: {
      get() {
        return this.getSessionStorage.search;
      },
      set(value) {
        this.updateSearchValue({ nombre: "search", operador: value });
      },
    },
  },
  created() {
    let filtro = this.getSessionStorage.filtro?.valor;
    if (!filtro) {
      this.updateFiltroValue({ nombre: "valor", operador: 0 });
      this.updateSearchValue({ nombre: "search", operador: "" });
    }
  },
  methods: {
    ...mapMutations(["updateFiltroValue", "updateSearchValue", "clearSessionStorage"]),
    onlyNumber,
    clearSessionStorage_() {
      this.clearSessionStorage();
      this.$toast.success("Filtros limpiados");
    },
  },
};
</script>
