/* eslint-disable */
<template>
  <div class="wrapper">
    <!-- ------------------------------- -->
    <DxChart
      :data-source="store.stats"
      palette="Violet"
      title="Динамика количества попыток пересечения границы по дням"
      style="width: 99%"
    >
      <DxCommonSeriesSettings argument-field="message_dt" />
      <DxCommonAxisSettings>
        <DxGrid :visible="true" />
      </DxCommonAxisSettings>
      <DxSeries
        v-for="architecture in architectures"
        :key="architecture.value"
        :value-field="architecture.value"
        :name="architecture.name"
      />
      <DxMargin :bottom="20" />
      <DxArgumentAxis :allow-decimals="false" :axis-division-factor="60">
        <DxLabel>
          <DxFormat type="decimal" />
        </DxLabel>
      </DxArgumentAxis>
      <DxScrollBar :visible="true" />
      <DxZoomAndPan argument-axis="both" />
      <DxLegend vertical-alignment="top" horizontal-alignment="right" />
      <DxTooltip :enabled="true" />
    </DxChart>
    <!--  -->
    <DxChart
      id="chart"
      :data-source="store.airports"
      title="Статистика аэропортов за сегодня"
      class="chart"
    >
      <DxCommonSeriesSettings argument-field="from_airport" type="stackedbar" />
      <DxSeries value-field="success_cnt" name="Успешно" />
      <DxSeries value-field="failed_cnt" name="Не прошли" />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="top"
      />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip3"
        location="edge"
      />
    </DxChart>
    <!--  -->
    <DxPieChart
      id="transport"
      :data-source="store.transport"
      type="doughnut"
      title="Статистика транспорта за сегодня"
      palette="Soft Pastel"
      class="chart"
    >
      />
      <DxSeries
        name="Успешно"
        argument-field="transport_type"
        value-field="success_cnt"
      >
        <DxLabel :visible="true">
          <DxConnector :visible="true" />
        </DxLabel>
      </DxSeries>
      <DxSeries
        name="Не прошли"
        argument-field="transport_type"
        value-field="failed_cnt"
      >
        <DxLabel :visible="true">
          <DxConnector :visible="true" />
        </DxLabel>
      </DxSeries>
      <DxLegend
        :margin="0"
        horizontal-alignment="right"
        vertical-alignment="top"
      />
      <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip2">
      </DxTooltip>
    </DxPieChart>
  </div>
</template>
<script>
import store from "../store/store";
import DxPieChart, {
  DxLegend,
  DxSeries,
  DxTooltip,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";

import {
  DxChart,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxCommonAxisSettings,
  DxGrid,
  DxMargin,
  DxFormat,
  DxScrollBar,
  DxZoomAndPan,
} from "devextreme-vue/chart";

export default {
  components: {
    DxPieChart,
    DxLegend,
    DxSeries,
    DxTooltip,
    DxLabel,
    DxConnector,
    DxExport,
    DxChart,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxCommonAxisSettings,
    DxGrid,
    DxMargin,
    DxFormat,
    DxScrollBar,
    DxZoomAndPan,
  },
  data() {
    return {
      store,
      architectures: [
        { value: "cnt", name: "Всего попыток" },
        { value: "success_cnt", name: "Успешно" },
        { value: "failed_cnt", name: "Не пропустили" },
      ],
    };
  },
  methods: {
    customizeTooltip({ percent }) {
      return {
        text: `${(percent * 100).toFixed(2)}%`,
      };
    },
    customizeTooltip2(pointInfo) {
      return {
        text: `${pointInfo.argumentText}<br>${pointInfo.seriesName}: ${pointInfo.valueText}`,
      };
    },
    customizeTooltip3(pointInfo) {
      return {
        text: `${pointInfo.argumentText}<br>${pointInfo.seriesName}: ${
          pointInfo.valueText
        }<br>${(pointInfo.percent * 100).toFixed(2)}%`,
      };
    },
  },
};
</script>
<style>
.wrapper {
  display: flex;
  align-items: flex-start;
  margin-top: 1%;
  flex-wrap: wrap;
}
.chart {
  width: 50%;
}
@media screen and (max-width: 1000px) {
  .chart {
    width: 100%;
  }
}
</style>
