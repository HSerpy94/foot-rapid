<template>
  {{items}}
  <table class="table table-striped mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Platillo</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
     <ListPay v-for="item in items" :key="item.id" :item="item">
    </ListPay>
    </tbody>
    <tfoot>
      <tr id="footer-carrito">
        <th scope="row" colspan="5" v-if="true">{{items.cantidad}}</th>
      </tr>
    </tfoot>
  </table>
  <TotalFood v-if="true"></TotalFood>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TotalFood from './TotalFood.vue'
import ListPay from './ListPay.vue'
export default {
  name: 'ListOrderFood',
  components: {
    TotalFood,
    ListPay
  },
  setup() {
    const store = useStore()
    const items = computed(() => store.state.ordenes)
    return { items }
  }
}
</script>

<style>

</style>