<template>
  <div class="root">
    <h1 v-html="$store.state.welcomeInfo.title"></h1>
    <div class="mainContent" v-html="$store.state.welcomeInfo.mainContent"></div>
    <button @click="start" type="button">Proceed</button>
  </div>
</template>

<script>
import store from "@/assets/js/store.js";

export default {
  name: 'Home',
  store: store,
  methods:{
    start(){
      this.$router.push('instructions');
    }
  }
}
</script>

<style scoped>
.root{
  display: flex;
  flex-direction: column;
  height: 100%;
}
h1{
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0;
}
.mainContent >>> p{
  margin: 0.5rem 0;
}
button{
  width: auto;
  margin: auto auto 2rem auto;
}
</style>