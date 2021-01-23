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
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[0] }" class="element e-opt" id="el0" @click="drawSymbol(0)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[1] }" class="element e-opt" id="el1" @click="drawSymbol(1)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[2] }" class="element e-opt" id="el2" @click="drawSymbol(2)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[3] }" class="element e-opt" id="el3" @click="drawSymbol(3)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[4] }" class="element e-opt" id="el4" @click="drawSymbol(4)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[5] }" class="element e-opt" id="el5" @click="drawSymbol(5)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[6] }" class="element e-opt" id="el6" @click="drawSymbol(6)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[7] }" class="element e-opt" id="el7" @click="drawSymbol(7)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[8] }" class="element e-opt" id="el8" @click="drawSymbol(8)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[9] }" class="element e-opt" id="el9" @click="drawSymbol(9)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[10] }" class="element e-opt" id="el10" @click="drawSymbol(10)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[11] }" class="element e-opt" id="el11" @click="drawSymbol(11)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[12] }" class="element e-opt" id="el12" @click="drawSymbol(12)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[13] }" class="element e-opt" id="el13" @click="drawSymbol(13)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[14] }" class="element e-opt" id="el14" @click="drawSymbol(14)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[15] }" class="element e-opt" id="el15" @click="drawSymbol(15)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[16] }" class="element e-opt" id="el16" @click="drawSymbol(16)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[17] }" class="element e-opt" id="el17" @click="drawSymbol(17)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[18] }" class="element e-opt" id="el18" @click="drawSymbol(18)" />
      <svg viewBox="0 0 100 100" v-bind:class="{ selected: currentAnswer[19] }" class="element e-opt" id="el19" @click="drawSymbol(19)" />
    </div>
    <button @click="nextItem" type="button">Continue</button>
  </div>
</template>

<script>
import COMM from "@/assets/js/communications.js";
import { mapGetters, mapActions } from "vuex";
import drawSVG from "@/assets/js/drawing.js";
export default {
  data() {
    return {
      currentAnswer: new Array(20).fill(false),
      currentItem: {},
      currentPos: 0,

      responseTime: 0,
      logTime: 0,
      testInterval: null,
      itemInterval: null,
    };
  },
  methods: {
    ...mapActions(["appendLog", "pushResponse", "pushRT", "pushSolution"]),
    drawSymbol(el) {
      const clickTime = new Date().getTime();
      this.appendLog(`o${el}:${clickTime - this.logTime}`);
      this.logTime = clickTime;
      this.currentAnswer[el] = !this.currentAnswer[el];
      this.currentAnswer = [...this.currentAnswer];
      if (this.settings.displaySolution) this.redrawSolution();
    },
    endTest() {
      if (!this.isDemo) this.writeResult();
      this.$router.push("final");
    },
    nextItem() {
      const clickTime = new Date().getTime();
      const solution = this.currentItem.code.split(",")[8]; //get last part of code string
      const answer = this.currentAnswer.map(item => +item).join(""); //convert the bool responses to a string with 1 and 0

      this.saveResponse(clickTime, solution, answer);
      this.redrawSolution();
      this.currentPos++;
      if (this.currentPos < this.items.length) {
        this.currentItem = { ...this.items[this.currentPos] };
        this.redrawItem();
        this.responseTime = clickTime;
        this.logTime = clickTime;
        if (this.settings.useItemTime) this.itemInterval = setTimeout(this.nextItem, this.settings.itemTime * 1000);
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
    redrawSolution() {
      drawSVG.clear("mat9");
      for (let j = 0; j < this.currentAnswer.length; j++) {
        if (+this.currentAnswer[j] === 1) drawSVG.select("mat9", j);
      }
    },
    saveResponse(clickTime, solution, answer) {
      this.pushResponse(answer);
      this.pushSolution(solution === answer ? 1 : 0);
      this.pushRT(clickTime - this.responseTime);
      this.appendLog("send:" + (clickTime - this.logTime));
      this.currentAnswer = [...this.currentAnswer.fill(false)];
    },
    writeResult() {
      let data = this.participant;
      data.testID = this.settings.testID;
      COMM.sendData(data, "writeResult");
    },
  },
  computed: mapGetters(["items", "settings", "participant", "isDemo"]),
  mounted() {
    console.log(this.settings);

    for (let i = 0; i < 20; i++) {
      drawSVG.select("el" + i, i);
    }
    this.currentItem = { ...this.items[0] };
    this.redrawItem();
    this.responseTime = new Date().getTime();
    this.logTime = this.responseTime;

    if (this.settings.useTestTime) this.testInterval = setTimeout(this.endTest, this.settings.testTime * 1000);
    if (this.settings.useItemTime) this.itemInterval = setTimeout(this.nextItem, this.settings.itemTime * 1000);
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

.selected {
  background-color: #dedede;
}

.selection {
  border-color: chartreuse;
}
@media only screen and (max-device-width: 568px) {
  .item-container {
    margin: 0.5rem auto;
    width: 33vh;
    height: 33vh;
  }
  .opt-container {
    margin: 0.5rem auto;
    width: 44vh;
    height: 55vh;
  }
}
</style>
