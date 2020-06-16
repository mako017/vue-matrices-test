import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        welcomeInfo : {
            title : "Welcome to the figural matrices task",
            mainContent : "<p>Thank you for taking part in this survey. In the following, you will be presented with XX tasks which require you to infer rules from the images you see.</p><p>Before you start with the task, please take your time to read and understand the instructions on the following pages.</p>"
        },
        instructions : [
            {
                type : "fullText",
                title: "Instruction Page 1",
                mainContent: "<p>This is a fullText page. No images can displayed here, but you can format your text freely.</p> <p><b>You</b> <i>can</i> <u>highlight</u> text</p>"
            },
            {
                type : "centerImage",
                title: "Instruction Page 2",
                mainContent: "<p>This is a centerImage page. Here you can display some explanations on top and then display an image</p>",
                // img: "@/assets/img/demo.png",
                img: "https://lets-test.it/matls/1.png",
                subContent: "<p>You can also add some text underneath the image if needed.</p> <p>However, keep in mind that your participants might have to scroll a lot if the image is too big</p>"
            }
        ]
    },
    getters:{
        getMessage() {
            return this.state.message;
        }
    }
})