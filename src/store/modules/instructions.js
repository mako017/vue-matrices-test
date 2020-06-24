// import axios from 'axios';

const state = {
  instructions: [
    {
      title: "Instruction Page 1",
      mainContent:
        "<h2>How to use our instructions</h2><h3>Another smaller header</h3><p>While we want you, to be able to customize all instructions, to your own needs, we can also understand that you might just want to use our pre made instructions. This is totally fine and <b>you don't need to explicitly ask for our consent</b>. <i>These instructions have been tested on several samples</i> in the past and have proven to be long enough so an <u>average</u> adult will understand the task at hand.</p><hr><h3>Custom instructions</h3><p>Of course, if you choose to use your own instructions, we want you to have access to the same tools we used. Thus you can freely write your own instructions with HTML and inline CSS. However, please understand that we can't guarantee that your handmade instructions will be displayed properly on all devices. Thus before sending the test link to your sample, make sure to test it on several devices, including smartphones, tablets and notebooks. Also different browsers may display your instructions differently and operating systems such as Android and iOS have differences, too.</p>",
    },
    {
      title: "Instruction Page 2",
      mainContent:
        "<p>Explaining a figural matrices task without the use of images can be quite challenging. Thus you can obviously use images for your instructions, too. The way this works is that you provide the software with a link to an image that can be accessed from anywhere on the internet. This link will be entered below the text and displayed centered on the page.</p>",
      img: "https://lets-test.it/matls/1.png",
      subContent:
        "<p>Sometimes being unable to put the image above the text might feel very limiting, thus we also provide the option to add text belows the image.</p> <p> If you continue to the next page, you will be presented with our standard instructions. Once you've finished them, an example test with 5 easy items will follow. As this is just a demonstration of what can be done with our software <b>no data will be saved</b>.",
    },
    {
      title: "Instruction Page 3",
      mainContent:
        "<p>Im Folgenden werden Sie einen Test zur logischen Denkfähigkeit bearbeiten. Der Test besteht aus 26 Aufgaben. Pro Item haben sie 90 Sekunden Zeit zur Bearbeitung.</p><p>Bitte lesen Sie sich die Hinweise zur Bearbeitung der Aufgaben in Ihrem eigenen Interesse aufmerksam durch. Aus Gründen der Standardisierung und Fairness ist es leider nicht möglich, auf diese Seite zu einem späteren Zeitpunkt wieder zurückzukommen. </p>",
    },
    {
      title: "Instruction Page 4",
      mainContent: "",
      img: "https://lets-test.it/ep1920/assets/img/stamm.png",
      subContent:
        "<p>In der oberen Abbildung wird Ihnen eine Beispielaufgabe gezeigt. Sie sehen neun Zellen, die mit Figuren an unterschiedlichen Positionen gefüllt sind. Über die Zellen einer Zeile hinweg folgen die Figuren bestimmten Regeln.</p><p> In dieser Abbildung wird die Symbolgruppe von Zelle zu Zelle jeweils um 90° im Uhrzeigersinn gedreht.Die letzte Zelle wurde leer gelassen.Ihre Aufgabe ist es zu erkennen, welche Figur in dieser Zelle eingesetzt werden muss.In diesem Fall müsste in die leere Zelle die rechte untere Ecke eingesetzt werden.</p>",
    },
    {
      title: "Instruction Page 5",
      mainContent:
        "<p>Im Folgenden werden Sie einen Test zur logischen Denkfähigkeit bearbeiten. Der Test besteht aus 26 Aufgaben. Pro Item haben sie 90 Sekunden Zeit zur Bearbeitung.</p><p>Bitte lesen Sie sich die Hinweise zur Bearbeitung der Aufgaben in Ihrem eigenen Interesse aufmerksam durch. Aus Gründen der Standardisierung und Fairness ist es leider nicht möglich, auf diese Seite zu einem späteren Zeitpunkt wieder zurückzukommen. </p>",
    },
  ],
};

const getters = {
  allInstructions: state => state.instructions,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
