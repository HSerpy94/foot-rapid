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
    },
    aumentar(state, id){
      state.ordenes[id].cantidad = state.ordenes[id].cantidad +1;
    },
    disminuir(state, id){
      state.ordenes[id].cantidad = state.ordenes[id].cantidad -1;
      if(state.ordenes[id].cantidad == 0){
        delete state.ordenes[id];
        alert("elemento eliminado");
      }
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
