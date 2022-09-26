/* eslint-disable */
<template>
  <div id="app">
    <Landing />
    <DataGrid />
    <Chart />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import Chart from "./components/Chart.vue";
import DataGrid from "./components/DataGrid.vue";
import "devextreme/dist/css/dx.material.orange.light.compact.css";

export default {
  name: "App",
  components: {
    DataGrid,
    Landing,
    Chart
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
