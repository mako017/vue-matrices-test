<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import COMM from "@/assets/js/communications.js";
import { mapActions } from "vuex";
require("@/assets/css/normal.css");

export default {
  data() {
    return {
      urlParams: {
        participantCode: null,
        testID: null,
      },
    };
  },
  methods: {
    ...mapActions(["setInstructions", "setItems", "setSettings", "updateID"]),
    handleURL() {
      const paramString = window.location.search;
      const parameters = new URLSearchParams(paramString);
      this.urlParams.participantCode = parameters.get("p") ? parameters.get("p") : null;
      this.urlParams.testID = parameters.get("t") ? parameters.get("t") : null;
      this.updateID(this.urlParams.participantCode);
    },
  },
  async created() {
    this.handleURL();
    const responseData = await COMM.requestData(this.urlParams.testID, "readTestSet");
    this.setItems(JSON.parse(responseData.items));
    this.setInstructions(JSON.parse(responseData.instructions));
    this.setSettings(JSON.parse(responseData.settings));
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
