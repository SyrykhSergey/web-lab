<template>
 <div class="app">
   <header-menu></header-menu>
   <catalog :posts="getData.dishes"></catalog><!-- Перенести в компонент catalog-item  -->
 </div>

</template>

<script>
import HeaderMenu from "@/Components/header-menu.vue";
import Catalog from "@/Components/catalog.vue";
import axios from "axios";

export default {
  name: "App",
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

*{
  margin: 0;
  padding: 0;
}
.app{


}



</style>