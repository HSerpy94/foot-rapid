<template>
  <div class="col-sm-4 mt-3">
    <div class="card">
      <FoodSelect v-if="platillo.order.In_Progress"></FoodSelect>
      <img :src="platillo.image" class="card-img-top">
      <div class="card-header">
        <input type="number" class="form-control" placeholder="Cantidad de platillos">
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{ platillo.name }}</h5>
          <p class="card-text"> ${{ formatPrice(platillo.precio) }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <a href="#" v-if="platillo.order.Available" class="btn btn-primary"
            @click="AgregarOrden(platillo)">Ordenar</a>
          <a href="#" class="btn btn-danger">Cancelar</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FoodSelect from './FoodSelect.vue';

export default {
  name: 'FoodList',
  props: ['platillo'],
  components: {
    FoodSelect
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    AgregarOrden(obj) {
      let trueOrder

      if (!this.platillo.order.In_Progress) {
        trueOrder = this.platillo.order.In_Progress = !this.platillo.order.In_Progress
      }

      var data = {
        id: obj.id,
        precio: obj.precio,
        name: obj.name,
        order: {
          In_Progress: trueOrder,
          delivery: false
        },
        image: obj.image
      }

      this.$emit("agregarPlatillo", data)
    }
  }
}
</script>

