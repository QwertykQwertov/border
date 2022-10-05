/* eslint-disable */
<template>
  <div id="app">
    <Header @openPopup="showPopup" />
    <DataGrid />
    <Chart />
    <Footer />
    <DxPopup
      :visible="popupVisible"
      :drag-enabled="false"
      :hide-on-outside-click="true"
      :show-title="true"
      :show-close-button="true"
      width="50%"
      height="50%"
      title="О проекте"
      @hiding="onHiding"
    >
      <p>
        <span>Наша команда</span> собрала статистику всех пересечений границ (по
        данным телеграмм-канала
        <a
          class="link"
          href="https://t.me/+r15hFvTaWhM5MDUy"
          target="_blank"
          style="color: black; text-decoration: underline;"
          ><b>Пограничный контроль</b></a
        >), разметили по типам транспорта, аэропорта отправления и
        визуализировали в одном месте.
      </p>
      <p> Теперь
        смотреть статистику по проценту успешных проходов границы стало сильно удобнее.<br/>
        Наш телеграмм канал:
        <a class="link" style="color: black; text-decoration: underline;" href="https://t.me/artydevc"  target="_blank"><b>artydev & Co</b></a>, там будем публиковать информацию по доработкам
        графиков и разметке информации
      </p>
    </DxPopup>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Chart from "./components/Chart.vue";
import DataGrid from "./components/DataGrid.vue";
import Footer from "./components/Footer.vue";
import "devextreme/dist/css/dx.material.orange.light.compact.css";
import store from "./store/store";
import DxPopup from "devextreme-vue/popup";

export default {
  name: "App",
  components: {
    Header,
    DataGrid,
    Chart,
    Footer,
    DxPopup,
  },
  data() {
    return {
      store,
      popupVisible: false,
    };
  },
  methods: {
    showPopup() {
      console.log(this.popupVisible);
      this.popupVisible = true;
    },
    onHiding() {
      this.popupVisible = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0;
}
.link:hover {
  color: #666 !important;
  text-shadow: 10px;
  text-decoration-line: underline;
  
}
.linkIcon {
  width: 25px;
  height: 25px;
  box-sizing: border-box;
}
.link:hover .linkIcon {
  /* box-shadow: 0px 0px 5px 10px #000; */
  border-radius: 100px; /* Радиус скругления */
  border: 3px solid; /* Параметры рамки */
  box-shadow: 0 0 7px #666;
}
</style>
