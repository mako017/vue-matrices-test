<template>
  <div class="root">
      <h1>{{instruction.title}}</h1>
      <div class="mainContent" v-html="instruction.mainContent"></div>
  </div>
</template>

<script>
export default {
    props:{
        instruction:Object
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
</style>