<template>
  <div>
    <Header />
    <div class="main">
      <header-nav />

      <client-only v-if="getContadoresFiltrados.length">
        <transition-group name="list" tag="ul">
          <li v-for="contador in getContadoresFiltrados" :key="contador.id">
            <Contador :contador="contador" class="contador" />
          </li>
        </transition-group>
      </client-only>

      <div v-else @click="$modal.show('agregar-contador')" class="add-contador-container">
        <span class="add-contador-label">Click para agregar un contador</span>
      </div>
    </div>
    <Footer />
    <modal-agregar-contador />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { applyOperator, applyOrderBy, applyFilter } from "@/utils/helpers";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters(["getLocalStorage", "getSessionStorage"]),
    getContadoresFiltrados() {
      let contadores = JSON.parse(JSON.stringify(this.getLocalStorage.contadores));
      if (contadores?.length) {
        // FILTRO OPERADOR ( >, >=, >, >= )
        if (this.getSessionStorage.filtro.operador !== "") {
          contadores = contadores.filter((contador) => {
            return this.applyOperator(
              contador.valor,
              this.getSessionStorage.filtro.valor,
              this.getSessionStorage.filtro.operador
            );
          });
        }

        // SORT/ORDEN
        if (this.getSessionStorage?.orderBy) {
          let valor = this.getSessionStorage.orderBy.valor;
          if (this.getSessionStorage.orderBy.operador == "desc") {
            contadores.sort((a, b) => this.applyOrderBy(a, b, valor));
          } else {
            contadores.sort((a, b) => this.applyOrderBy(a, b, valor)).reverse();
          }
        }

        // CAMPO DE BUSQUEDA
        if (this.getSessionStorage.search) {
          let contadores_ = [];
          contadores.forEach((contador, key) => {
            if (this.applyFilter(contador, this.getSessionStorage.search)) {
              contadores_.push(contador);
            }
          });
          contadores = contadores_;
        }
      }

      return contadores;
    },
  },
  mounted() {
    // LIMPIAR CONTADORES AL MONTAR EL COMPONENTE
    this.clearContadores();
  },
  methods: {
    ...mapActions(["addContador"]),
    ...mapMutations(["clearContadores"]),
    applyFilter,
    applyOperator,
    applyOrderBy,
  },
};
</script>
