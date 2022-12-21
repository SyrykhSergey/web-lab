<template>
  <div>
    <header-menu></header-menu>
    <div class="sortingBar"> <!-- Загадка от жака фреско, нужно ли создавать компонент под сортировку если она используется 1 раз?-->
      <select>
        <option>Мясоо</option>
        <option>Веганское мясооо</option>
        <option>Не веганское мясооо</option>
      </select>
    </div>
    <catalog :posts="getData.dishes"></catalog><!-- Перенести в компонент catalog-item  -->
  </div>

</template>

<script>
import HeaderMenu from "@/Components/header-menu.vue";
import Catalog from "@/Components/catalog.vue";
import axios from "axios";

export default {
  name: "main",
  components: {Catalog, HeaderMenu},
  data(){
    return{
      posts:[]
    }
  },
  computed:{
    getData(){
      return this.$store.getters.catalogPage
    }
  },
  async mounted() {
    this.$store.dispatch('fetchCatalog')
  }
}
</script>

<style>




</style>