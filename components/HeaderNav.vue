<template>
  <div>
    <div class="header-buttons ma-2 d-custom-001">
      <button
        @click="$modal.show('agregar-contador')"
        :disabled="getLocalStorage.contadores.length > 19"
        class="btn btn-primary btn-lg w-100-resp"
      >
        Nuevo contador
      </button>
    </div>

    <div class="header-nav">
      <div class="a-center w-100 d-line-block">
        <no-ssr>
          <toggle-button
            :width="130"
            :height="35"
            :font-size="17"
            v-model="valor"
            :color="{ checked: '#34495e', unchecked: '#34495e', disabled: '#ccc' }"
            :labels="{ checked: 'Nombre', unchecked: 'Número' }"
            class="toggle-one"
          />

          <toggle-button
            :width="100"
            :height="35"
            :font-size="17"
            v-model="operador"
            :color="{ checked: '#34495e', unchecked: '#34495e', disabled: '#ccc' }"
            :labels="{ checked: 'Desc', unchecked: 'Asc' }"
            class="toggle-two"
          />
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getBoolean, getOperador, getValor } from "@/utils/helpers";
export default {
  computed: {
    ...mapGetters(["getSessionStorage", "getLocalStorage"]),
    valor: {
      get() {
        let valor = this.getSessionStorage.orderBy?.valor;
        valor = this.getBoolean(valor, "nombre");
        return valor;
      },
      set(value) {
        value = this.getValor(value);
        this.updateOrderByValue({ nombre: "valor", operador: value });
      },
    },
    operador: {
      get() {
        let valor = this.getSessionStorage.orderBy?.operador;
        valor = this.getBoolean(valor, "desc");
        return valor;
      },
      set(value) {
        value = this.getOperador(value);
        this.updateOrderByValue({ nombre: "operador", operador: value });
      },
    },
  },
  created() {
    let valor = this.getSessionStorage.orderBy?.operador;
    if (!valor) {
      this.updateOrderByValue({ nombre: "valor", operador: "nombre" });
      this.updateOrderByValue({ nombre: "operador", operador: "desc" });
    }
  },
  methods: {
    ...mapMutations(["updateOrderByValue"]),
    getBoolean,
    getOperador,
    getValor,
  },
};
</script>
