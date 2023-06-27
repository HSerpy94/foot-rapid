<template>
  <div class="check">
    <i class="fa fa-check"></i>
  </div>
</template>

<script>
export default {
  name: "FoodSelect",
};
</script>

<style scoped>
.check {
  position: absolute;
  border-radius: 100%;
  background: rgb(186, 185, 187);
  opacity: 0.5;
  float: right;
  margin-top: 10px;
  right: 5px;
}

.check i {
  padding: 15px;
  color: rgb(0, 129, 86);
}
</style>