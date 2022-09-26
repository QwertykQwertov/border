/* eslint-disable */
<template>
  <div class="container">
    <h1>Стастистика прохождения пограничного контроля</h1>
    <DxButton
      :width="120"
      text="Обновить"
      type="default"
      hint="Нажмите для обновления информации"
      @click="onClick($event)"
    />
  </div>
</template>
<script>
import DxButton from 'devextreme-vue/button';

export default {
  name: "Landing",
  components: {
    DxButton,
  },
  data() {
    return {};
  },
};
</script>
