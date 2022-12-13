<template>
<div class="catalog-item">
  <img class="dishesImage" :src=post.image>
  <h6>{{post}}</h6>
</div>
</template>

<script>
export default {
  name: "catalog-item",
  props:{
    post:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.dishesImage{
  width: 125px;
  height: 100px;
}
</style>