<template>
  <div class="root">
    <div class="item-container">
      <svg viewBox="0 0 100 100" class="element e-item" id="mat1" ref="mat1" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat2" ref="mat2" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat3" ref="mat3" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat4" ref="mat4" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat5" ref="mat5" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat6" ref="mat6" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat7" ref="mat7" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat8" ref="mat8" />
      <svg viewBox="0 0 100 100" class="element e-item" id="mat9" ref="mat9" />
    </div>
    <div class="opt-container">
      <svg viewBox="0 0 100 100" class="element e-opt" id="el0" @click="draw(0)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el1" @click="draw(1)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el2" @click="draw(2)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el3" @click="draw(3)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el4" @click="draw(4)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el5" @click="draw(5)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el6" @click="draw(6)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el7" @click="draw(7)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el8" @click="draw(8)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el9" @click="draw(9)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el10" @click="draw(10)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el11" @click="draw(11)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el12" @click="draw(12)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el13" @click="draw(13)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el14" @click="draw(14)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el15" @click="draw(15)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el16" @click="draw(16)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el17" @click="draw(17)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el18" @click="draw(18)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el19" @click="draw(19)" />
    </div>
    <button @click="nextItem" type="button">Continue</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import drawSVG from "@/assets/js/drawing.js";
export default {
  data() {
    return {
      currentItem: {},
      currentPos: 0,
    };
  },
  methods: {
    draw(a) {
      console.log(a);
      drawSVG.select("mat9", a);
    },
    nextItem() {
      this.currentPos++;
      this.currentItem = { ...this.items[this.currentPos] };
    },
  },
  computed: mapGetters(["items"]),
  mounted() {
    for (let i = 0; i < 20; i++) {
      drawSVG.select("el" + i, i);
    }
    this.currentItem = { ...this.items[0] };
  },
};
</script>

<style scoped>
.root {
  width: 100%;
}

.item-container {
  width: 27vh;
  height: 27vh;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.opt-container {
  width: 36vh;
  height: 45vh;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.element {
  background-color: white;
  margin: 5px;
  border: 1px solid black;
}
.selection {
  border-color: chartreuse;
}
</style>
