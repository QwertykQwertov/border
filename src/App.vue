/* eslint-disable */
<template>
  <div id="app">
    <DataGrid />
    <Chart />
  </div>
</template>

<script>
import Chart from "./components/Chart.vue";
import DataGrid from "./components/DataGrid.vue";
import "devextreme/dist/css/dx.material.orange.light.compact.css";
import store from "./store/store";

export default {
  name: "App",
  components: {
    DataGrid,
    Chart,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
