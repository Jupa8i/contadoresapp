import Vue from "vue";
import { formatNumber } from "@/utils/helpers";

Vue.filter("NUM", value => {
  return formatNumber(value);
});

// Vue.filter("CLP", value => {
//   return "$" + formatNumber(value);
// });

