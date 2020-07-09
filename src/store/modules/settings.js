const state = {
  // settings: {
  testTime: 600,
  itemTime: 60,
  displaySolution: true,
  displaytestTime: false,
  displayItemtime: false,
  // },
};

const getters = {
  settings: state => state,
};

const actions = {
  setSettings: ({ commit }, settings) => {
    commit("setSettings", settings);
  },
};

const mutations = {
  setSettings: (state, settings) => (state.settings = settings),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
