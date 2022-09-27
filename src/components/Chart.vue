/* eslint-disable */
<template>
  <div style="display:flex; align-items: flex-start;
 margin-top: 5%;">
  <DxPieChart
    id="pie"
    :data-source="popular"
    type="doughnut"
    title="Популярные способы пересечения границы"
    palette="Soft Pastel"
    style="width: 50%;"
  >
    <DxSeries argument-field="transport_type">
      <DxLabel :visible="true" >
        <DxConnector :visible="true" />
      </DxLabel>
    </DxSeries>
    <DxLegend
      :margin="0"
      horizontal-alignment="right"
      vertical-alignment="top"
    />
    <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip">
    </DxTooltip>
  </DxPieChart>
  <DxPieChart
    id="pie2"
    :data-source="border"
    type="doughnut"
    title="Пересечение границы"
    palette="Material"
    style="width: 50%;"
  >
    <DxSeries argument-field="check">
      <DxLabel :visible="true" >
        <DxConnector :visible="true" />
      </DxLabel>
    </DxSeries>
    <DxLegend
      :margin="0"
      horizontal-alignment="right"
      vertical-alignment="top"
    />
    <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip">
    </DxTooltip>
  </DxPieChart>
  
</div>
</template>
<script>
  import store from "../store/store"
import DxPieChart, {
  DxLegend,
  DxSeries,
  DxTooltip,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";

export default {
  components: {
    DxPieChart,
    DxLegend,
    DxSeries,
    DxTooltip,
    DxLabel,
    DxConnector,
    DxExport,
  },
  data() {
    return {
      store,
      popular: [
            {
              transport_type: "Самолет",
              val: 1720,
            },
            {
              transport_type: "Авто",
              val: 585
            },
            {
              transport_type: "Поезд",
              val: 261,
            },
            {
              transport_type: "Автобус",
              val: 233,
            },
            {
              transport_type: "Пешком",
              val: 99,
            },
          ],
      border: [
        {
          check: "Успешно прошли",
          val: 2841
        },
        {
          check: "Не прошли",
          val: 57
        },
      ],
    };
  },
  // computed:{
  //   mostPopular: ()=>{
  //     let popularFromChart = []
  //     store.dataSource.load().forEach(msg =>{
  //       popularFromChart.push({
  //             transport_type: msg.transport_type,
  //             val: msg.cnt,
  //           })
  //           return popularFromChart
  //     })
  //   }
  // },
  methods: {
    customizeTooltip({ percent }) {
      return {
        text: `${(percent * 100).toFixed(2)}%`,
      };
    },
  },
};
</script>
<style>
#pie {
  height: 440px;
}
</style>
