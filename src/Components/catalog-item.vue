<template>
<div class="catalog-item">
  <img class="dishesImage" :src=post.image>
  <div class="descriptionItem">
    <p4>{{post.name}}</p4>
    <p6>Категория блюда: {{post.category}}</p6>
    <p6>{{post.rating}}</p6>
    <p>{{post.description}}</p>
  </div>
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
  width: 100%;
  height: 100px;
}
.catalog-item{
  padding: 0px;
  margin: 10px;
  width: 150px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
p{
  font-size: 12px;
}
</style>