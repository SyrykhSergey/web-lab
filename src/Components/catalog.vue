<template>
<div class="catalog">

  <catalog-item
    v-for="postItem in posts"
    :post="postItem"
    :key="postItem.id"
  />
</div>
</template>

<script>
import CatalogItem from "@/Components/catalog-item.vue";

export default {
  name: "catalog",
  components: {CatalogItem},
  props:{
    posts:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.catalog{
  position: relative;
  left: 0px;
  right: 0px;
  margin: 5px auto;
  max-width: 700px;

  display: flex;
  flex: border-box;
  flex-wrap: wrap;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
</style>