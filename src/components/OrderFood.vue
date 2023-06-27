<template>
    <div class="col-sm-6 mt-3" v-if="orden.order.In_Progress">
        <div class="card">
            <img :src="orden.image" class="card-img-top">
           
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{ orden.name }}</h5>
                    <p class="card-text"> ${{ orden.precio }}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <a href="#" v-if="orden.order.In_Progress" class="btn btn-primary">En proceso...</a>
                    <a href="#" class="btn btn-danger">Cancelar</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderFood',
    props: ['orden']

}
</script>

<style>

</style>