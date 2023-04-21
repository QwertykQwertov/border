/* eslint-disable */
<template>
  <div id="app">
    <Header @openPopup="showPopup" />
    <main class="main-wrapper">
      <TitleBlock />
      <DataGrid />
      <Chart />
      <DxPopup
        :visible="popupVisible"
        :drag-enabled="false"
        :hide-on-outside-click="true"
        :show-title="true"
        :show-close-button="true"
        width="50%"
        :height="heightPopup"
        title="О проекте"
        @hiding="onHiding"
      >
        <PopUpContent />
      </DxPopup>
    </main>
    <Footer />
  </div>
</template>

<script>
import "devextreme/dist/css/dx.material.orange.light.compact.css";
import Header from "./components/Header.vue";
import TitleBlock from "./components/TitleBlock.vue";
import DataGrid from "./components/DataGrid.vue";
import Chart from "./components/Chart.vue";
import Footer from "./components/Footer.vue";
import store from "./store/store";
import DxPopup from "devextreme-vue/popup";
import PopUpContent from "./components/PopUpContent.vue";

export default {
  name: "App",
  components: {
    Header,
    TitleBlock,
    DataGrid,
    Chart,
    Footer,
    DxPopup,
    PopUpContent,
  },
  created() {
    const today = new Date();
    store.date = today.toISOString().slice(0, 10);
  },
  data() {
    return {
      store,
      popupVisible: false,
    };
  },
  computed: {
    heightPopup() {
      if (window.innerWidth >= 800) {
        return "50%";
      } else {
        return "90%";
      }
    },
  },
  methods: {
    showPopup() {
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
  color: #2c3e50;
  margin: 0;
}
.main-wrapper {
  width: 95vw;
  margin: 0 auto;
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
  border-radius: 100px; /* Радиус скругления */
  border: 3px solid; /* Параметры рамки */
  box-shadow: 0 0 7px #666;
}
</style>
