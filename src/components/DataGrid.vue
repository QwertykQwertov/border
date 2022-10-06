/* eslint-disable */
<template>
  <div class="data-wrapper">
    <h1>Стастистика прохождения пограничного контроля</h1>
    <div
      style="
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
      "
    >
      <p>
        <a class="link" href="https://pay.cloudtips.ru/p/2a3d8e17" target="_blank"
          ><img class="linkIcon" src="../assets/ruble.svg" alt="Пожертвовать" />
          Подкинуть монету разработчикам</a
        >
      </p>
      <p>
        <a class="link" href="https://t.me/+lUS8sdQPGMkzNDhi" target="_blank"
          ><img class="linkIcon" src="../assets/telega.svg" alt="Ссылка на телеграм" />
          Подписывайся, чтобы следить за изменениями</a
        >
      </p>
    </div>
    <!-- <DxButton
      ref="refreshBtn"
      :width="120"
      text="Обновить"
      type="default"
      hint="Нажмите для обновления информации"
      @click="onClick($event)"
    /> -->
    <div
      style="
        display: flex;
        align-items: flex-start;
        margin-top: 1%;
        flex-wrap: wrap;
        justify-content: space-around;
      "
    >
      <div class = "gridContainer">
        <h4>Общая</h4>
        <DxDataGrid
          ref="gridAll"
          :data-source="store.allMessages"
          :show-borders="true"
          :focused-row-enabled="true"
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
      <div class = "gridContainer" >
        <h4>За сегодня</h4>
        <DxDataGrid
          ref="gridToday"
          :data-source="store.transport"
          :show-borders="true"
          :focused-row-enabled="true"
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
         if( e.rowType === "data" && e.column.dataField === "success_percent"){
           e.data.Task_Status === "Completed"
           e.cellElement.style.color = parseFloat(e.value) > 90 ? "green" : "red"
         }

        }
  },
};
</script>
<style scoped>
  .data-wrapper{
    text-align: center;
  }
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: #666;
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
.gridContainer {
  width: 49%;
}
@media screen and (max-width: 1000px) {
  .gridContainer {
    width: 100%
  }
}
</style>
