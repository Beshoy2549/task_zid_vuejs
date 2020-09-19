<template>
  <div id="app">
    <appHeader />
    <router-view />
  </div>
</template>

<script>
import appHeader from "./components/global/appHeader";
export default {
  name: "app",
  components: {
    appHeader,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap");
body {
  direction: rtl;
  background-color: #1d1920 !important;
  color: #fff !important;
  h1 {
    text-align: center;
  }
 }
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
}
</style>