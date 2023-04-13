<template>
  <div class="date-wrapper">
    <DxDateBox
      :value="now"
      width="400"
      height="50"
      display-format="d.MM.yyyy"
      @value-changed="onVlaueChanged"
    />
  </div>
</template>

<script>
import DxDateBox from 'devextreme-vue/date-box';
import store from '@/store/store';
export default {
  name: "DatePicker",
  components: {
    DxDateBox
  },
  data () {
    return {
      store,
      now: new Date(),
    };
  },
  methods: {
    onVlaueChanged (e) {
      store.setDate(e.value)
      store.date = e.value.toISOString().slice(0, 10);

      this.store.airports.reload()
      this.store.destinationsToday.reload()
      this.store.transport.reload()
    }
  }
};
</script>

<style scoped>
/* @import url("https://cdn3.devexpress.com/jslib/22.2.5/css/dx.light.css"); */
.date-wrapper {
  width: 20%;
  /* margin: 2% auto; */
}
.dx-texteditor.dx-editor-filled {
  background: transparent;
  border: 1px solid #00000026;
  border-radius: 5px;
  box-shadow: none;
}

@media screen and (max-width: 700px) {
  .date-wrapper {
    width: 40%;
  }
}
</style>