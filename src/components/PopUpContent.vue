<template>
  <div>
    <p>
      <span>Наша команда</span> собрала статистику всех пересечений границ (по
      данным телеграмм-канала
      <a
        class="link"
        href="https://t.me/+r15hFvTaWhM5MDUy"
        target="_blank"
        style="color: black; text-decoration: underline"
        ><b>Пограничный контроль</b></a
      >), разметили по типам транспорта, аэропорта отправления и визуализировали
      в одном месте.
    </p>
    <p>
      Теперь смотреть статистику по проценту успешных проходов границы стало
      сильно удобнее.<br />
      Наш телеграмм канал:
      <a
        class="link"
        style="color: black; text-decoration: underline"
        href="https://t.me/artydevc"
        target="_blank"
        ><b>artydev & Co</b></a
      >, там будем публиковать информацию по доработкам графиков и разметке
      информации.
    </p>
  </div>
</template>

<script>
export default {
  name: "PopUpContent",
};
</script>

<style scoped>
.link {
  color: white;
  /* text-decoration-line: underline !important; */
}
.link:hover {
  color: #666;
  text-shadow: 10px;
}
.footer-link:hover {
  text-decoration: underline;
}
</style>
