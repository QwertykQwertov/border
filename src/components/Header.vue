/* eslint-disable */
<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo" style="margin-left: 1%"
          ><img class="logoIcon" src="../assets/logo.svg" alt="Logo"
        /></a>
        <ul id="nav-mobile" class="right">
          <li><a href="#" @click="showPopup" >О проекте</a></li>
        </ul>
      </div>
    </nav>

  </div>
</template>
<script>
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";

export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods:{
    showPopup(){
      this.$emit('openPopup')
    }
  }
};
</script>
<style scoped>
</style>
