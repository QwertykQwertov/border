<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <!-- <div class="col l12 s12">
          <h5 class="white-text">По вопросам сотрудничества обращаться:</h5>
          <p class="grey-text text-lighten-4">
            <a
              style="text-decoration: underline"
              class="link"
              href="https://t.me/nimorozov"
              target="_blank"
              >Николай</a
            >
          </p>
          <p class="grey-text text-lighten-4">
            <a
              style="text-decoration: underline"
              class="link"
              href="https://t.me/Qwertyk911"
              target="_blank"
              >Иван</a
            >
          </p>
        </div> -->
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2022
        <a
          class="grey-text text-lighten-4 footer-link"
          href="https://t.me/artydevc"
          target="_blank"
          >artydev & Co</a
        >
        <a
          class="grey-text text-lighten-4 right footer-link"
          href="https://t.me/QwertykQwertov"
          target="_blank"
          >По вопросам сотрудничества обращаться по ссылке</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
