<script>
import HeaderComponent from "./HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      count: 0,
      description: "",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    reset() {
      this.count = 0;
    },
    getDataPropsFromChild(data) {
      this.description = `author by ${data}`;
    },
  },
};
</script>

<template>
  <div id="App">
    <div class="counter-container">
      <HeaderComponent
        :description="description"
        @sendDataFromChild="getDataPropsFromChild"
      />

      <h1 class="count-value" :class="{ less: count == 0 }">{{ count }}</h1>
      <div class="controler">
        <button @click="decrement">Decrement --</button>
        <button @click="increment">Increment ++</button>
        <button @click="reset">Reset Count Value</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(211, 211, 211);
  padding-bottom: 20px;
  border-radius: 10px;
}

.count-value {
  color: rgb(35, 192, 35);
  padding: 20px 10px;
}

.less {
  color: black;
}

.controler button {
  margin: 10px;
}
</style>
