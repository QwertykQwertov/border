/* eslint-disable */
<template>
  <div class="wrap-grid-container">
    <div class="gridContainer">
      <h4>Общая</h4>
      <DxDataGrid
        ref="gridAll"
        :data-source="store.allMessages"
        :show-borders="true"
        :focused-row-enabled="true"
        :height="303"
        @cell-prepared="setPercentColor"
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
        <DxColumn
          data-field="failed_cnt"
          caption="Не прошли"
          data-type="number"
        />
        <DxColumn
          data-field="success_percent"
          caption="Процент прошедших"
          data-type="string"
          alignment="right"
        />
        <DxSummary>
          <DxTotalItem display-format="Всего:"> </DxTotalItem>
          <DxTotalItem
            column="cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
          <DxTotalItem
            column="success_cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
          <DxTotalItem
            column="failed_cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
        </DxSummary>
        <DxSorting mode="multiple" />
      </DxDataGrid>
    </div>
    <!--  -->
    <div class="gridContainer">
      <h4>За {{ store.dateFormatter(store.date) }}</h4>
      <DxDataGrid
        ref="gridToday"
        :data-source="store.transport"
        :show-borders="true"
        :focused-row-enabled="true"
        @cell-prepared="setPercentColor"
        :height="303"
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
        <DxColumn
          data-field="failed_cnt"
          caption="Не прошли"
          data-type="number"
        />
        <DxColumn
          data-field="success_percent"
          caption="Процент прошедших"
          data-type="string"
          alignment="right"
        />
        <DxSummary>
          <DxTotalItem display-format="Всего:"> </DxTotalItem>
          <DxTotalItem
            column="cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
          <DxTotalItem
            column="success_cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
          <DxTotalItem
            column="failed_cnt"
            summary-type="sum"
            display-format="Всего: {0}"
          >
          </DxTotalItem>
        </DxSummary>
        <DxSorting mode="multiple" />
      </DxDataGrid>
    </div>
  </div>
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
import DxButton from "devextreme-vue/button";

import "devextreme/data/odata/store";
import store from "../store/store";

export default {
  name: "DataGrid",
  components: {
    DxDataGrid,
    DxColumn,
    DxSummary,
    DxTotalItem,
    DxSorting,
    DxSearchPanel,
    DxButton,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    setPercentColor(e) {
      if (e.rowType === "data" && e.column.dataField === "success_percent") {
        e.data.Task_Status === "Completed";
        e.cellElement.style.color = parseFloat(e.value) > 90 ? "green" : "red";
      }
    },
  },
};
</script>
<style scoped>
.wrap-grid-container {
  display: flex;
  align-items: flex-start;
  margin-top: 1%;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}

.gridContainer {
  width: 49%;
}
@media screen and (max-width: 1000px) {
  .gridContainer {
    width: 100%;
  }
}

</style>
