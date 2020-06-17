<template>
  <div class="root">
    <h1>Welcome to the figural matrices task</h1>
    <div class="mainContent">
      <p>Thank you for taking part in this survey. In the following, you will be presented with XX tasks which require you to infer rules from the images you see.</p>
      <p>Before you start with the task, please take your time to read and understand the instructions on the following pages.</p>
    </div>
    <button @click="start" type="button">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    start() {
      this.$router.push("instructions");
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0;
}
.mainContent >>> p {
  margin: 0.5rem 0;
}
button {
  width: auto;
  margin: auto auto 2rem auto;
}
</style>