import { createStore } from "vuex";

const modulCount = {
  state: {
    number: 0,
  },
  mutations: {
    plusNumber: (state, payload) => {
      console.log("Ini dari Mutation plusNumber " + payload);
      state.number += payload;
    },
    minNumber: (state, payload) => {
      console.log("Ini dari Mutation minNumber " + payload);
      if (state.number > 0) state.number -= payload;
    },
  },
  actions: {
    plusNumber(newNumber, payload) {
      newNumber.commit("plusNumber", payload);
      console.log("Ini dari action plusNumber " + payload);
    },
    minNumber(newNumber, payload) {
      console.log("Ini dari action minNumber " + payload);
      newNumber.commit("minNumber", payload);
    },
  },
};

const modulFramework = {
  state: {
    dataFramework: [
      { name: "reactive", language: "Javascript" },
      { name: "angular", language: "Javascript" },
    ],
  },
  mutations: {
    addNewFrameworkData: (state, payload) => {
      console.log("Ini dari Mutation addNewFrameworkData " + payload);
      state.dataFramework.push(payload);
    },
  },
  actions: {
    addNewFrameworkData(newData, payload) {
      console.log("Ini dari action addNewFrameworkData " + payload);
      newData.commit("addNewFrameworkData", payload);
    },
  },
};

export default createStore({
  //   modules: {
  //     counter: modulCount,
  //     framework: modulFramework,
  //   },
  state: {
    number: 0,
    dataFramework: [
      { name: "reactive", language: "Javascript" },
      { name: "angular", language: "Javascript" },
    ],
  },
  mutations: {
    plusNumber: (state, payload) => {
      console.log("Ini dari Mutation plusNumber " + payload);
      state.number += payload;
    },
    minNumber: (state, payload) => {
      console.log("Ini dari Mutation minNumber " + payload);
      if (state.number > 0) state.number -= payload;
    },
    addNewFrameworkData: (state, payload) => {
      console.log("Ini dari Mutation addNewFrameworkData " + payload);
      state.dataFramework.push(payload);
    },
  },
  actions: {
    plusNumber(newNumber, payload) {
      newNumber.commit("plusNumber", payload);
      console.log("Ini dari action plusNumber " + payload);
    },
    minNumber(newNumber, payload) {
      console.log("Ini dari action minNumber " + payload);
      newNumber.commit("minNumber", payload);
    },
    addNewFrameworkData(newData, payload) {
      console.log("Ini dari action addNewFrameworkData " + payload);
      newData.commit("addNewFrameworkData", payload);
    },
  },
});
