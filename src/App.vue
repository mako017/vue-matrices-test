<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import COMM from "@/assets/js/communications.js";
require("@/assets/css/normal.css");

export default {
  beforeMount() {
    COMM.sendData(1, "readTestSet");
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  padding: 0 20%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
