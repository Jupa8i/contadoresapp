<template>
  <div class="contador-container d-between">
    <div class="contador-info">
      <label class="contador-label">Nombre</label>
      <h2 class="contador-titulo">{{ contador.nombre }}</h2>
    </div>

    <div class="d-flex operator-container">
      <div class="contador-operador d-flex-nw a-center w-100-resp mb-1-resp">
        <fa @click="restarContador_(contador)" icon="minus" class="btn-icon fa-icon mr-1" />
        <div class="form-group mb-0">
          <input
            v-model="contador.valor"
            @keypress="onlyNumber"
            type="number"
            id="numero"
            min="0"
            max="20"
            maxlength="3"
            class="count-number-small"
            placeholder="Número"
          />
        </div>
        <fa @click="sumarContador_(contador)" icon="plus" class="btn-icon fa-icon ml-1" />
      </div>
      <div class="a-center btn-clear-contenedor-container">
        <fa @click="deleteContador_(contador.id)" icon="trash" class="btn-icon fa-icon mr-1" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { onlyNumber } from "@/utils/helpers";
export default {
  props: ["contador"],
  methods: {
    ...mapMutations(["restarContador", "sumarContador", "deleteContador"]),
    onlyNumber,
    deleteContador_(id) {
      this.deleteContador(id);
    },
    restarContador_(contador) {
      if (contador.valor == 0) {
        this.$toast.error("Número mínimo alcanzado");
      } else {
        this.restarContador(contador.id);
      }
    },
    sumarContador_(contador) {
      if (contador.valor > 19) {
        this.$toast.error("Número máximo alcanzado");
      } else {
        this.sumarContador(contador.id);
      }
    },
  },
};
</script>
