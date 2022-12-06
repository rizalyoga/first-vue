<script setup>
import FoodList from "./components/FoodDataComponent.vue";
import CounterApp from "./components/CounterAPP.vue";
import HeaderAndFooter from "./components/slot/Header&Footer.vue";
import MainStoreComponent from "./components/all-store-components/MainStoreComponent.vue";
</script>

<template>
  <div id="App">
    <HeaderAndFooter>
      <template v-slot:header>
        <h3>This is Header</h3>
      </template>
    </HeaderAndFooter>
    <CounterApp />
    <HeaderAndFooter>
      <template v-slot:header>
        <h3>List Menu</h3>
      </template>
    </HeaderAndFooter>
    <FoodList />
    <HeaderAndFooter>
      <template v-slot:header>
        <h3>Vuex Store Component</h3>
      </template>
    </HeaderAndFooter>
    <MainStoreComponent />
    <HeaderAndFooter>
      <template v-slot:footer>
        <h3>This is Footer</h3>
      </template>
    </HeaderAndFooter>
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

#count-value {
  color: rgb(35, 192, 35);
  padding: 20px 10px;
}

.controler button {
  margin: 10px;
}
</style>
