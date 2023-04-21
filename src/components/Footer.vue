<template>
  <footer class="page-footer">
    <div class="footer-copyright">
      <div class="container">
        © 2022
        <a
          class="grey-text text-lighten-4 footer-link"
          href="https://t.me/artydevc"
          target="_blank"
        >
          artydev & Co
        </a>
        <a
          class="grey-text text-lighten-4 right footer-link"
          href="https://t.me/QwertykQwertov"
          target="_blank"
        >
          По вопросам сотрудничества обращаться по ссылке
        </a>
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
}
.link:hover {
  color: #666;
  text-shadow: 10px;
}
.page-footer {
  /* background-color: #9bdfff; */
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
