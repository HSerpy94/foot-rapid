import { createStore } from 'vuex'

export default createStore({
  state: {
    platillos:[],
    ordenes:{}
  },
  getters: {
  },
  mutations: {
    setPlatillo(state, payload){
      state.platillos = payload;
      console.log(state.platillos)
    },
    setOrden(state,payload){
      state.ordenes[payload.id] = payload
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('api.json');
        const data = await res.json();
        commit('setPlatillo', data);
      } catch (error) {
        console.log(error)
      }
    },
    addOrden({commit,state}, orden){
      state.ordenes.hasOwnProperty(orden.id)
      ?orden.cantidad = state.ordenes[orden.id].cantidad + 1
      :orden.cantidad =1
      commit('setOrden',orden)
    }
  }
  
})
