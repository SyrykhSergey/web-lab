<template>

  <div class="sortingBar">
    <!-- Загадка от жака фреско, нужно ли создавать компонент под сортировку если она используется 1 раз?-->
    <select>
      <option v-for="options in categoriesOption">{{ options.name }}</option>
    </select>
    <select>
      <option v-for="options in sortingOption">{{ options.name }}</option>
    </select>
  </div>
  <div class="catalog">

    <catalog-item
        v-for="postItem in posts"
        :post="postItem"
        :key="postItem.id"
    />
  </div>
  <div class="pages">

  </div>
</template>

<script>
import CatalogItem from "@/Components/catalog-item.vue";

export default {
  name: "catalog",
  data() {
    return {
      categoriesOption: [
        {name: 'Wok', id: 1},
        {name: 'Pizza', id: 2},
        {name: 'Soup', id: 3},
        {name: 'Dessert', id: 4},
        {name: 'Drink', id: 5}
      ],
      sortingOption: [
        {name: 'А-Я', id: 1},
        {name: 'Я-А', id: 2},
        {name: 'По возрастанию цены', id: 3},
        {name: 'По убыванию цены', id: 4},
        {name: 'По возрастанию рейтинга', id: 5},
        {name: 'По убыванию рейтинга', id: 6}
      ]
    }
  },
  components: {CatalogItem},
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.sortingBar {
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  margin: auto;
  width: 700px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);


}

.sortingBar select {
  margin-left: 20px;
}

.catalog {
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