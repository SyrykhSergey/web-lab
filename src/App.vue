<template>
 <div class="app">
    <router-view></router-view>
 </div>
</template>

<script>
import HeaderMenu from "@/Components/header-menu.vue";
import Catalog from "@/Components/catalog.vue";
import axios from "axios";

export default {
  name: "App"
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