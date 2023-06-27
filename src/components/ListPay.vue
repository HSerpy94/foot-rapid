<template>
   <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{ item.cantidad }}</td>
        <td>${{item.precio.toFixed(2)}}</td>
        <td>
            <button class="btn btn-info btn-sm" @click="aumentar(item.id)">
                +
            </button>
            <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
                -
            </button>
        </td>
      </tr>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name:'ListPay',
    props:["item"],
    setup(){
        const store = useStore()
        const aumentar = id =>{store.commit('aumentar', id)}
        const disminuir = id =>{store.commit('disminur', id)}

    }
}
</script>

<style>

</style>