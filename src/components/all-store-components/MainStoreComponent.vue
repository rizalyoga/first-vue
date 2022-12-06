<script>
import store from "../../store/store";
export default {
  data() {
    return {
      frameworkName: "",
      language: "",
    };
  },
  methods: {
    submitEvent(e) {
      e.preventDefault();
      if (this.frameworkName && this.language) {
        const payload = {
          name: this.frameworkName,
          language: this.language,
        };
        store.dispatch("addNewFrameworkData", payload);
        this.frameworkName = "";
        this.language = "";
      }
    },
  },
};
</script>

<template>
  <h1>{{ $store.state.number }}</h1>
  <button @click="$store.dispatch('minNumber', 10)">-10</button>
  <button @click="$store.dispatch('plusNumber', 10)">+10</button>
  <div>
    <h1>List Framework</h1>
    <ol class="list-framework">
      <li
        v-for="framework in $store.state.dataFramework"
        :key="$store.state.dataFramework.name"
      >
        {{ framework.name }} - {{ framework.language }}
      </li>
    </ol>
    <form @submit="submitEvent">
      <div class="input-wrapper">
        <label name="framework-name">Framework Name</label>
        <input
          class="text-input"
          type="text"
          v-model="frameworkName"
          name="framework-name"
          placeholder="Framework Name"
        />
      </div>
      <div class="input-wrapper">
        <label name="language-name">Language</label>
        <input
          class="text-input"
          type="text"
          v-model="language"
          name="language"
          placeholder="Programming Language"
        />
      </div>
      <input class="button-input" type="submit" value="Add Data" />
    </form>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
.list-framework {
  text-align: left;
}

form {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-end;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  flex-basis: 50%;
}

.button-input {
  padding: 0 8px;
  height: 45px;
  bottom: 0;
}
.text-input {
  padding: 12px 6px;
}
</style>
