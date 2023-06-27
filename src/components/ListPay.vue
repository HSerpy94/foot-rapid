<template>
   <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{ item.cantidad }}</td>
        <td>${{item.precio.toFixed(2)}}</td>
        <td>
            <button class="btn btn-info btn-sm" >
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
        </td>
      </tr>
</template>

<script>
export default {
    name:'ListPay',
    props:["item"]
}
</script>

<style>

</style>