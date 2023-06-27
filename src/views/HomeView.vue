<template>
  <div class="container">
    <div class="row">
      <!--<pre>{{ ordenes }}</pre>-->
    <FoodList
    v-for="platillo of platillos"
       :key="platillo.id"
       :platillo="platillo"
       @agregarPlatillo="agregarPlatillo"></FoodList>
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import FoodList from '@/components/FoodList.vue'
export default {
  name: 'HomeView',
  components: {
    FoodList
  },
  setup(){
    const store = useStore();
    onMounted(() =>{
      store.dispatch('fetchData')
    })

    const agregarPlatillo = (Orden) =>{
      console.log(Orden)
      store.dispatch('addOrden', Orden)
    }

    const platillos = computed(()=> store.state.platillos)
    const ordenes = computed(()=>store.state.ordenes)
    return {platillos,agregarPlatillo, ordenes}
  }
}
</script>
