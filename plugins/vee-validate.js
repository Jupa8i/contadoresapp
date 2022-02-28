import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, min_value, max_value } from "vee-validate/dist/rules";
import { setInteractionMode } from "vee-validate";
setInteractionMode("aggressive");

extend("required", {
  ...required,
  message: field => "El campo " + field + " es requerido"
});

extend("max_value", {
  ...max_value,
  message: (field, values) => "El campo no puede ser mayor a " + values["max"]
});

extend('min_value', {
  ...min_value,
  message: (field, values) => "El campo no puede ser menor a " + values["min"]
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
