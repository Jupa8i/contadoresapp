<template>
  <div>
    <div class="navbar-component">
      <div class="navbar">
        <input type="checkbox" id="collapse_nav" />
        <label class="d-flex w-100-resp" id="navbar-header" for="collapse_nav">
          <div class="logo-container a-center ma-1 mt-2">
            <div>
              <img src="img/logo.png" class="logo" />
            </div>

            <div class="iconPlus d-block-resp">
              <span class="plus"></span>
              <span class="minus"></span>
            </div>
          </div>
        </label>

        <div class="navbar-collapse">
          <filtrar-contadores />
          <ordenar-contadores />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltrarContadores from "@/components/header/FiltrarContadores";
import OrdenarContadores from "@/components/header/OrdenarContadores";
export default {
  components: {
    FiltrarContadores,
    OrdenarContadores,
  },
};
</script>
