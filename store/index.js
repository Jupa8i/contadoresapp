import Vue from 'vue'
export const state = () => ({
  localStorage: {
    contadores: []
  },
  sessionStorage: {
    filtro: {
      operador: "",
      valor: 0
    },
    orderBy: {},
    search: ""
  }

})

export const actions = {
  addContador(context, contador){
    context.commit('setContador', contador);
  }
}

export const mutations = {

  // CONTADORES
  setContador(state, contador){
    state.localStorage.contadores.splice(state.localStorage.contadores.length, 0, contador);
  },
  deleteContador(state, id){
    let index = state.localStorage.contadores.findIndex(item => item.id == id);
    state.localStorage.contadores.splice(index, 1)
  },
  sumarContador(state, id) {
    let contador = state.localStorage.contadores.find(item => item.id == id);
    contador.valor = contador.valor + 1;
  },
  restarContador(state, id) {
    let contador = state.localStorage.contadores.find(item => item.id == id);
    contador.valor = contador.valor - 1;
  },
  clearContadores(state) {
    state.localStorage.contadores = []
  },

  // FILTROS
  updateOrderByValue(state, { nombre, operador }){
    Vue.set(state.sessionStorage.orderBy, nombre, operador);
  },

  updateFiltroValue(state, { nombre, operador }){
    Vue.set(state.sessionStorage.filtro, nombre, operador);
  },

  updateSearchValue(state, { nombre, operador }){
    Vue.set(state.sessionStorage, nombre, operador);
  },
  clearSessionStorage(state) {
    let init = {
      filtro: {
        operador: "",
        valor: 0
      },
      orderBy: {},
      search: ""
    }

    Vue.set(state, "sessionStorage", init);
  },
}

export const getters = {
  getLocalStorage(state) {
    return state.localStorage
  },
  getSessionStorage(state) {
    return state.sessionStorage
  },
  getSumaContadores(state){
    let total = 0
    state.localStorage.contadores.forEach(element => {
      total = total + element.valor
    });

    return total
  }
}


