<template>
<div class="catalog-item">
  <img class="dishesImage" :src=post.image>
  <div class="descriptionItem">
    <p4>{{post.name}}<br></p4>
    <p6>Категория блюда: {{post.category}}<br></p6>
    <div class="ratingsComp">
      <ratings
      v-for="starItem in starCount"
      :star="starItem"
      >

      </ratings>
    </div>

    <p>{{post.description}}</p>
    <div class="buying">
      <p5>Цена: {{post.price}}</p5>
      <ion-icon class="buyPlace" name="cart-outline"></ion-icon>
    </div>
  </div>
</div>
</template>

<script>
import ratings from "@/Components/UI/ratings.vue";

export default {
  name: "catalog-item",
  data(){
    return{
      stars: 0,
      starCount:[],
    }
  },
  components: {ratings},
  props:{
    post:{
      type: Object,
      required: true
    }
  },
  methods:{
    countStars(){
      this.starCount = [];
      this.stars = Math.floor(Number(this.post.rating));

      let i = 0;
      while(i < this.stars){
        this.starCount.push(1);
        i++;
      }
      i = 10-this.stars;
      while(i > 0){
        this.starCount.push(0);
        i--;
      }
    }

  },
  mounted() {
    this.countStars()
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
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.ratingsComp{
  display: flex;
  flex: border-box;
  flex-direction: row;
}
.buying{
  background: #a3a2a2;


}
.buyPlace{

  background: seagreen;
  border-radius: 5px;
  float: right;

}

p{
  font-size: 12px;
}
</style>