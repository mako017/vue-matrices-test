const state = {
  testID: "defaultTest",
  testTime: 600,
  useTestTime: true,
  displaytestTime: false,
  itemTime: 60,
  useItemTime: false,
  displayItemtime: false,
  displaySolution: true,
  demo: false,
};

const getters = {
  settings: state => state,
  isDemo: state => state.demo,
};

const actions = {
  setDemo: ({ commit }, demo) => {
    commit("setDemo", demo);
  },
  setSettings: ({ commit }, settings) => {
    commit("setSettings", settings);
  },
};

const mutations = {
  setDemo: (state, demo) => (state.demo = demo),
  setSettings: (state, settings) => (state.settings = settings),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
