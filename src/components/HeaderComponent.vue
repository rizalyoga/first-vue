<script>
export default {
  data() {
    return {
      titleApp: "Counter APP",
    };
  },
  name: "Counter-APP",
  props: {
    description: {
      type: String,
      default: "this is counter APP",
    },
  },
  methods: {
    handleClickYoga() {
      this.$emit("sendDataFromChild", "Yoga");
    },
    handleClickRizal() {
      this.$emit("sendDataFromChild", "Rizal");
    },
  },
};
</script>

<template>
  <div id="header-component">
    <h1>
      {{ titleApp }}
    </h1>
    <h4 v-if="description.length === 0">This is my first vue app</h4>
    <h4>{{ description }}</h4>
    <div class="controler">
      <button @click="handleClickYoga">Yoga</button>
      <button @click="handleClickRizal">Rizal</button>
    </div>
  </div>
</template>

<style scoped>
#header-component h1 {
  margin-bottom: -20px;
  letter-spacing: -3px;
}

.controler button {
  margin: 0 10px;
}
</style>
