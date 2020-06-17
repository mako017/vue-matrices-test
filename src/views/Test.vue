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
      <svg viewBox="0 0 100 100" class="element e-opt" id="el0" @click="drawSymbol(0)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el1" @click="drawSymbol(1)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el2" @click="drawSymbol(2)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el3" @click="drawSymbol(3)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el4" @click="drawSymbol(4)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el5" @click="drawSymbol(5)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el6" @click="drawSymbol(6)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el7" @click="drawSymbol(7)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el8" @click="drawSymbol(8)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el9" @click="drawSymbol(9)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el10" @click="drawSymbol(10)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el11" @click="drawSymbol(11)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el12" @click="drawSymbol(12)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el13" @click="drawSymbol(13)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el14" @click="drawSymbol(14)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el15" @click="drawSymbol(15)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el16" @click="drawSymbol(16)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el17" @click="drawSymbol(17)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el18" @click="drawSymbol(18)" />
      <svg viewBox="0 0 100 100" class="element e-opt" id="el19" @click="drawSymbol(19)" />
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
    drawSymbol(a) {
      console.log(a);
      drawSVG.select("mat9", a);
    },
    endTest() {
      // alert("End of demonstration");
      this.$router.push("final");
    },
    nextItem() {
      this.currentPos++;
      if (this.currentPos < this.items.length) {
        this.currentItem = { ...this.items[this.currentPos] };
        this.redrawItem();
      } else this.endTest();
    },
    redrawItem() {
      const codeArray = this.currentItem.code.split(",");
      for (let i = 0; i < 8; i++) {
        drawSVG.clear("mat" + (i + 1));
        for (let j = 0; j < codeArray[i].split("").length; j++) {
          if (+codeArray[i].split("")[j] === 1) drawSVG.select("mat" + (i + 1), j);
        }
      }
    },
  },
  computed: mapGetters(["items"]),
  mounted() {
    for (let i = 0; i < 20; i++) {
      drawSVG.select("el" + i, i);
    }
    this.currentItem = { ...this.items[0] };
    this.redrawItem();
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
