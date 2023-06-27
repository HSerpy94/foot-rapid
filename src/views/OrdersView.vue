
<template>
  <div class="container">
    <div class="row">
      <!--<div class="col-md-8">
        <div class="row"> 
          <OrderFood v-for="orden of ordenes" :key="orden.id" :orden="orden"></OrderFood>
        </div>
      </div>-->
      <div class="col-md-12">
        <br>
        <h3><span>Lista a pagar</span></h3>
        
        <ListOrderFood></ListOrderFood>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
//import OrderFood from '@/components/OrderFood.vue'
import ListOrderFood from '@/components/ListOrderFood.vue';
export default { name: 'OrdersView',
  components: {
    //OrderFood,
    ListOrderFood
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('fetchData')
    })

    const ordenes =
      computed(() => store.state.ordenes)

    return { ordenes }
  }
}
</script>

<style>

</style>
