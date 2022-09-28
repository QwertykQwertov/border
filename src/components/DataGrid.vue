/* eslint-disable */
<template>
  <div class="container">
    <h1>Стастистика прохождения пограничного контроля</h1>
    <DxButton
      ref="refreshBtn"
      :width="120"
      text="Обновить"
      type="default"
      hint="Нажмите для обновления информации"
      @click="onClick($event)"
    />

    <DxDataGrid
      ref="grid"
      :data-source="store.allMessages"
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
      <DxColumn
        data-field="failed_cnt"
        caption="Не прошли"
        data-type="number"
      />
      <DxColumn
        data-field="success_percent"
        caption="Процент прошедших"
        data-type="number"
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
      <DxSearchPanel :visible="true" placeholder="Поиск" />
    </DxDataGrid>
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
    onClick(e) {
      this.$refs.grid.$_instance.refresh();
      console.log(this.$refs)
    },
  },
};
</script>
