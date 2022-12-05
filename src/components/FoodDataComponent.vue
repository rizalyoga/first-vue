<script>
export default {
  data() {
    return {
      foods: ["Pizza", "French Fries", "Hotdog", "Tacos"],
      newFood: "",
    };
  },
  methods: {
    addFood() {
      if (this.newFood.length) {
        this.foods.push(this.newFood);
        this.newFood = "";
      }
    },
  },
};
</script>

<template>
  <ol class="list-data">
    <li v-for="food in foods" v-bind:key="food">{{ food }}</li>
  </ol>
  <div class="list-food-controller">
    <input type="text" v-model="newFood" />
    <button v-on:click="addFood">add new food</button>
  </div>
  <h4>{{ newFood }}</h4>
</template>

<style scoped>
.list-data {
  text-align: left;
}

.list-food-controller input {
  padding: 8px;
  margin: 0 4px;
}
</style>
