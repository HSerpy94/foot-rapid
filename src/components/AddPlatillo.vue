<template>
    <div class="col-md-4">..</div>
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">AGREGAR PLATILLO</div>
            <div class="card-body">
                <form>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Nombre del platillo">
                    </div>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Dirección (Link) de imagen">
                    </div>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Precio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">Publicado</label>
                    </div>
                    
                </form>
                <br>
                <button class="btn btn-primary btn-sm" id="vaciar-carrito">
                    Agregar platillo
                </button>
            </div>
        </div>
    </div>
    <div class="col-md-4">..</div>
</template>

<script>

export default {
    name: 'AddPlatillo',
    components: {

    }

}
</script>

<style>

</style>