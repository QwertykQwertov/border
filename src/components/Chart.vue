/* eslint-disable */
<template>
  <div>
  <DxPieChart
    id="pie"
    :data-source="popular"
    type="doughnut"
    title="Популярные способы пересечения границы"
    palette="Soft Pastel"
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
</div>
</template>
<script>
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
      populationByRegions: [
        {
          region: "Asia",
          val: 4119626293,
        },
        {
          region: "Africa",
          val: 1012956064,
        },
        {
          region: "Northern America",
          val: 344124520,
        },
        {
          region: "Latin America and the Caribbean",
          val: 590946440,
        },
        {
          region: "Europe",
          val: 727082222,
        },
        {
          region: "Oceania",
          val: 35104756,
        },
      ],
      popular: [
        {
          transport_type: "Самолет",
          val: 1720
        },
        {
          transport_type: "Авто",
          val: 585
        },
        {
          transport_type: "Поезд",
          val: 261
        },
        {
          transport_type: "Автобус",
          val: 233
        },
        {
          transport_type: "Пешком",
          val: 99
        },
      ],
    };
  },
  methods: {
    customizeTooltip({ valueText, percent }) {
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
