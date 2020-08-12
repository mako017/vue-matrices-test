<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import COMM from "@/assets/js/communications.js";
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions(["setInstructions", "setItems", "setSettings", "setDemo", "updateID"]),
    handleURL() {
      const paramString = window.location.search;
      const parameters = new URLSearchParams(paramString);
      this.urlParams.participantCode = parameters.get("p") ? parameters.get("p") : null;
      this.urlParams.testID = parameters.get("t") ? parameters.get("t") : null;
      if (this.urlParams.testID === null) this.setDemo(true);
      this.updateID(this.urlParams.participantCode);
      console.log(this.isDemo);
    },
  },
  computed: mapGetters(["isDemo"]),
  async created() {
    this.handleURL();
    const responseData = await COMM.requestData(this.urlParams.testID, "readTestSet");
    if (responseData.items) {
      this.setItems(JSON.parse(responseData.items));
      this.setInstructions(JSON.parse(responseData.instructions));
      this.setSettings(JSON.parse(responseData.settings));
    }
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
@media only screen and (max-device-width: 568px) {
  #app {
    padding: 0 2%;
  }
}
</style>
