const state = {
  testTime: 600,
  useTestTime: true,
  displaytestTime: false,
  itemTime: 60,
  useItemTime: false,
  displayItemtime: false,
  displaySolution: true,
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
