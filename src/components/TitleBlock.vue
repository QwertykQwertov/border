<template>
  <div class="data-wrapper">
    <h1 class="main-title">Стастистика прохождения пограничного контроля</h1>
    <!-- <h3 id="blink5">
      В настоящее время сбор данных прекращен. Сервис доступен в ознакомительных
      целях.
    </h3> -->
    <div class="link-wrapper">
      <a
        class="link"
        href="https://pay.cloudtips.ru/p/2a3d8e17"
        target="_blank"
      >
        <img class="linkIcon" src="../assets/ruble.svg" alt="Пожертвовать" />
        <span>Подкинуть монету разработчикам</span>
      </a>
      <a class="link" href="https://t.me/+lUS8sdQPGMkzNDhi" target="_blank">
        <img
          class="linkIcon"
          src="../assets/telega.svg"
          alt="Ссылка на телеграм"
        />
        <span>Подписывайся, чтобы следить за изменениями</span></a
      >
      <a
        class="link"
        href="https://t.me/flyback_bot?start=relocate"
        target="_blank"
      >
        <img
          class="linkIcon"
          src="../assets/plane.png"
          alt="Ссылка на телеграм"
        />
        <span>Покупка обратных билетов за 2 минуты</span>
      </a>
      <DatePicker />
    </div>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
  name: "TitleBlock",
};
</script>

<style scoped>
.main-title {
  text-align: center;
}
.link-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.link {
  width: 24%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  text-decoration: none;
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
  border-radius: 100px; 
  border: 3px solid; 
  box-shadow: 0 0 7px #666;
}

@media screen and (max-width: 900px) {
  .link-wrapper > * {
    width: 40%;
  }
  .link-wrapper {
    justify-content: space-evenly;
    gap: 10px;
  }
}

@media screen and (max-width: 500px) {
  .main-title {
    font-size: 3.2rem;
  }
  .link-wrapper {
    flex-direction: column;
  }

  .link-wrapper > * {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}

#blink5 {
  -webkit-animation: blink5 2s linear infinite;
  animation: blink5 2s linear infinite;
}
@-webkit-keyframes blink5 {
  0% {
    color: rgb(245, 12, 12);
  }
  50% {
    color: rgb(230, 215, 16);
  }
  100% {
    color: rgb(245, 12, 12);
  }
}
@keyframes blink5 {
  0% {
    color: rgb(245, 12, 12);
  }
  50% {
    color: rgb(230, 215, 16);
  }
  100% {
    color: rgb(245, 12, 12);
  }
}
</style>
