<template>
    <div class="root">
        <FT
            v-if="allInstructions[i].type === 'fullText'"
            :instruction="allInstructions[i]"
        />
        <CI
            v-if="allInstructions[i].type === 'centerImage'"
            :instruction="allInstructions[i]"
        />
        <button type="button" @click="next">Continue</button>
    </div>
</template>

<script>
import FT from '@/components/instructions/fullText.vue';
import CI from '@/components/instructions/centerImage.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        FT,
        CI,
    },
    data() {
        return {
            i: 0,
        };
    },
    methods: {
        next() {
            if (this.i < this.$store.state.instructions.length - 1) {
                this.i++;
            } else this.$router.push('task');
        },
    },
    computed: mapGetters(['allInstructions']),
};
</script>

<style scoped>
button {
    width: auto;
    margin: auto auto 2rem auto;
}
</style>
