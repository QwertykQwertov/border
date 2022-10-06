/* eslint-disable */
<template>
  <div class="wrapper">
    <!-- ------------------------------- -->
    <DxChart
      :data-source="store.stats"
      palette="Violet"
      title="Динамика количества попыток пересечения границы по дням"
      style="width: 98%"
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
      <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <!-- <DxLabel
          displayMode="rotate"
          :rotationAngle="45"
        > -->
        <DxLabel>
          <DxFormat type="decimal" />
        </DxLabel>
      </DxArgumentAxis>
      <DxScrollBar :visible="true" />
      <DxZoomAndPan argument-axis="both" />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
      />
      <DxTooltip :enabled="true" />
    </DxChart>
    <!--  -->
    <DxChart
      id="chart"
      :data-source="store.airports"
      title="Статистика аэропортов за сегодня"
      class="chart"
    >
      <DxCommonSeriesSettings
        argument-field="iata_code"
        type="stackedbar"
      />
      <DxSeries
        value-field="success_cnt"
        name="Успешно"
      />
      <DxSeries
        value-field="failed_cnt"
        name="Не прошли"
      />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="top"
      />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="airportTooltip"
        location="edge"
      />
      <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <!-- <DxLabel
          displayMode="rotate"
          :rotationAngle="45"
        >
        </DxLabel> -->
      </DxArgumentAxis>
    </DxChart>
    <!--  -->
    <DxChart
      id="chart"
      :data-source="store.airportsAllTime"
      title="Статистика аэропортов за все время"
      class="chart"
    >
      <DxCommonSeriesSettings
        argument-field="iata_code"
        type="stackedbar"
      />
      <DxSeries
        value-field="success_cnt"
        name="Успешно"
        color="#04a863"
      />
      <DxSeries
        value-field="failed_cnt"
        name="Не прошли"
        color="#ee1c25"
      />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="top"
      />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="airportTooltip"
        location="edge"
      />
      <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <!-- <DxLabel
          displayMode="rotate"
        >
        </DxLabel> -->
      </DxArgumentAxis>
    </DxChart>
    <!-- destination -->
    <DxChart
      id="chart"
      :data-source="store.destinationsToday"
      title="Статистика по странам прибытия за сегодня"
      class="chart"
    >
      <DxCommonSeriesSettings
        argument-field="destination"
        type="stackedbar"
      />
      <DxSeries
        value-field="success_cnt"
        name="Успешно"
        color="#233291"
      />
      <DxSeries
        value-field="failed_cnt"
        name="Не прошли"
        color="#ee1c25"
      />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="top"
      />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="destinationTooltip"
        location="edge"
      />
      <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <!-- <DxLabel
          displayMode="rotate"
          :rotationAngle="45"
        >
        </DxLabel> -->
      </DxArgumentAxis>
    </DxChart>
    <!--  -->
    <DxChart
      id="chart"
      :data-source="store.destinationsAllTime"
      title="Статистика по странам прибытия за все время"
      class="chart"
    >
      <DxCommonSeriesSettings
        argument-field="destination"
        type="stackedbar"
      />
      <DxSeries
        value-field="success_cnt"
        name="Успешно"
        color="#315e22"
      />
      <DxSeries
        value-field="failed_cnt"
        name="Не прошли"
        color="#ee1c25"
      />
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="top"
      />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="destinationTooltip"
        location="edge"
      />
      <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <!-- <DxLabel
        :rotationAngle="45"
          displayMode="rotate"
        >
        </DxLabel> -->
      </DxArgumentAxis>
    </DxChart>
  </div>
</template>
<script>
import store from "../store/store";
import {
  // DxPieChart,
  DxLegend,
  DxSeries,
  DxTooltip,
  // DxConnector,
  // DxExport,
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
  DxLabel,
} from "devextreme-vue/chart";

export default {
  components: {
    // DxPieChart,
    DxLegend,
    DxSeries,
    DxTooltip,
    DxLabel,
    // DxConnector,
    // DxExport,
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
  data () {
    return {
      store,
      angle: 45,
      architectures: [
        { value: "cnt", name: "Всего попыток" },
        { value: "success_cnt", name: "Успешно" },
        { value: "failed_cnt", name: "Не пропустили" },
      ],
    };
  },
  methods: {
    destinationTooltip (pointInfo) {
      return {
        text: `${pointInfo.point.data.destination}<br>${pointInfo.seriesName}: ${pointInfo.valueText}<br>${(pointInfo.percent * 100).toFixed(2)}%`,
      };
    },
    airportTooltip (pointInfo) {
      return {
        text: `${pointInfo.point.data.airport_name}<br>${pointInfo.seriesName
          }: ${pointInfo.valueText}<br>${(pointInfo.percent * 100).toFixed(2)}%`,
      };
    },
    customizeTooltip ({ percent }) {
      return {
        text: `${(percent * 100).toFixed(2)}%`,
      };
    },
    customizeTooltip2 (pointInfo) {
      return {
        text: `${pointInfo.argumentText}<br>${pointInfo.seriesName}: ${pointInfo.valueText}`,
      };
    },
    customizeTooltip3 (pointInfo) {
      console.log(pointInfo);
      return {
        text: `${pointInfo.argumentText}<br>${pointInfo.seriesName}: ${pointInfo.valueText
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
  margin: 2% 0;
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
