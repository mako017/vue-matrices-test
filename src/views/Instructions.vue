<template>
  <div class="root">
    <stdInst :instruction="allInstructions[i]" />
    <button type="button" @click="next">Continue</button>
  </div>
</template>

<script>
import stdInst from "@/components/instructions/standardInstruction.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    stdInst,
  },
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    next() {
      if (this.i < this.allInstructions.length - 1) {
        this.i++;
      } else this.$router.push("task");
    },
  },
  computed: mapGetters(["allInstructions"]),
};
</script>

<style scoped>
button {
  width: auto;
  margin: auto auto 2rem auto;
}
</style>
