<template>
  <div class="ratings">
    <ion-icon v-if="star === 1" name="star"></ion-icon>
    <ion-icon v-if="star === 0" name="star-outline"></ion-icon>
  </div>
</template>

<script>
export default {
  name: "ratings",

  props: {
    star: {
      type: Number,
      required: true
    }
  }


}
</script>

<style scoped>
.ratings {
  display: flex;
  flex-wrap: nowrap;
  color: gold;
  width: 14px;
  height: 14px;
}
</style>