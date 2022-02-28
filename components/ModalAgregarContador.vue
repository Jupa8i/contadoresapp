<template>
  <div>
    <modal name="agregar-contador" :width="350" :height="280" :adaptive="true">
      <span class="btn-close">
        <fa @click="hide" icon="times" />
      </span>

      <div class="modal-content">
        <h2>Crear contador</h2>

        <ValidationObserver ref="add_contador" v-slot="{ handleSubmit }">
          <form ref="form_contador" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider v-slot="{ errors }" name="nombre" rules="required">
              <div class="form-group mw-240 mb-2">
                <label for="nombre">Nombre</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  name="nombre"
                  placeholder="Nombre contador"
                  autocomplete="off"
                  maxlength="30"
                />
                <FormError :error="errors[0]"> </FormError>
              </div>
            </ValidationProvider>

            <div class="btn-container">
              <a @click="hide" class="btn btn-secondary btn-cancel">Cancelar</a>
              <a @click="handleSubmit(onSubmit)" class="btn btn-primary mb-1">Agregar</a>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      nombre: "",
    },
  }),

  watch: {
    "form.nombre"(val) {
      if (val.length > 1) {
        this.$refs.add_contador.validate();
      }
    },
  },
  methods: {
    ...mapActions(["addContador"]),
    show() {
      this.$modal.show("agregar-contador");
    },
    hide() {
      this.$modal.hide("agregar-contador");
    },
    onSubmit() {
      this.$nuxt.$loading.start();
      if (this.$refs.add_contador.validate()) {
        let id = Math.random().toString(36).substring(2, 15);

        let contador = {
          id: id,
          nombre: this.form.nombre,
          valor: 0,
        };

        this.addContador(contador).then(() => {
          this.$nuxt.$loading.finish();
          this.$refs.add_contador.reset();
          this.form.nombre = "";
          this.hide();
          this.$toast.success("Contador agregado");
        });
      } else {
        this.$nuxt.$loading.finish();
        this.$toast.error("Error!");
      }
    },
  },
};
</script>
