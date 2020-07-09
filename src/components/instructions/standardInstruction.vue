<template>
  <div class="root">
    <div class="mainContent" v-html="instruction.html"></div>
  </div>
</template>

<script>
export default {
  name: "standardInstruction",
  props: {
    instruction: Object,
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

img {
  align-self: center;
  max-height: 60vh;
  max-width: 80%;
}

.mainContent >>> p {
  margin: 0.5rem 0;
}
.mainContent >>> h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0 2rem 0;
}
.mainContent >>> h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}
.mainContent >>> h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
}

.mainContent >>> img {
  align-self: center;
  max-height: 60vh;
  max-width: 80%;
}
</style>