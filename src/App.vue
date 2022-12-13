<template>
 <div class="app">
   <header-menu></header-menu>
   <catalog :posts="posts.dishes"></catalog>
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
  methods:{
    async fetchPosts(){
      try {
        const response = await axios.get('https://food-delivery.kreosoft.ru/api/dish?categories=Wok&vegetarian=false&sorting=NameAsc&page=1');
        this.posts = response.data;
      } catch (e) {
        alert('Error')
      }
      
    }
  },
  mounted() {
    this.fetchPosts();
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