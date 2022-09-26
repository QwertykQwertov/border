/* eslint-disable */
<template>
  <DxDataGrid
    :ref="grid"
    :data-source="dataSource"
    :show-borders="true"
    :focused-row-enabled="true"
    :search-enabled="true"
  >
    <DxColumn
      data-field="transport_type"
      caption="Вид транспорта"
      data-type="string"
    />
    <DxColumn data-field="cnt" caption="Количество" data-type="number" />
    <DxColumn
      data-field="success_cnt"
      caption="Успешно прошли"
      data-type="number"
    />
    <DxColumn data-field="failed_cnt" caption="Не прошли" data-type="number" />
    <DxColumn
      data-field="success_percent"
      caption="Процент прошедших"
      data-type="number"
    />
    <DxSummary>
      <DxTotalItem  display-format="Всего:"> </DxTotalItem>
      <DxTotalItem column="cnt" summary-type="sum" display-format="Всего: {0}" v-model="test"> </DxTotalItem>
      <DxTotalItem column="success_cnt" summary-type="sum" display-format="Всего: {0}"> </DxTotalItem>
      <DxTotalItem column="failed_cnt" summary-type="sum" display-format="Всего: {0}"> </DxTotalItem>
    </DxSummary>
    <DxSorting mode="multiple" />
    <DxSearchPanel :visible="true" placeholder="Поиск"/>
  </DxDataGrid>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxSummary,
  DxTotalItem,
  DxSorting,
  DxSearchPanel,
} from "devextreme-vue/data-grid";

import DataSource from "devextreme/data/data_source";
import "devextreme/data/odata/store";

export default {
  name: "DataGrid",
  components: {
    DxDataGrid,
    DxColumn,
    DxSummary,
    DxTotalItem,
    DxSorting,
    DxSearchPanel,
  },
  data() {
    return {
      test: 0,
      dataSource: new DataSource({
        key: "transport_type",
        load() {
          return [
            {
              transport_type: "Самолет",
              cnt: 1720,
              success_cnt: 1704,
              failed_cnt: 16,
              success_percent: 99.1,
            },
            {
              transport_type: "Авто",
              cnt: 585,
              success_cnt: 569,
              failed_cnt: 16,
              success_percent: 97.3,
            },
            {
              transport_type: "Поезд",
              cnt: 261,
              success_cnt: 257,
              failed_cnt: 4,
              success_percent: 98.5,
            },
            {
              transport_type: "Автобус",
              cnt: 233,
              success_cnt: 222,
              failed_cnt: 11,
              success_percent: 95.3,
            },
            {
              transport_type: "Пешком",
              cnt: 99,
              success_cnt: 89,
              failed_cnt: 10,
              success_percent: 99.9,
            },
          ];
        },
      }),
    };
  },
};
</script>
