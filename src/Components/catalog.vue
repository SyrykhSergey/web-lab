<template>
<div class="catalog-item">

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
.catalog-item{
  display: flex;
}
</style>