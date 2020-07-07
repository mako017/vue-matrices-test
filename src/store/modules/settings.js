const state = {
  settings: {},
};

const getters = {
  settings: state => state.settings,
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
