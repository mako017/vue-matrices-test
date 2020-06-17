// import axios from 'axios';

const state = {
  participant: {
    id: "fixedId",
    response: [],
    RT: [],
  },
};

const getters = {};

const actions = {
  pushResponse({ commit }, response) {
    let newResponse = state.response;
    newResponse.push(response), commit("updateResponse", newResponse);
  },
  pushRT({ commit }, RT) {
    let newRT = state.RT;
    newRT.push(RT), commit("updateRT", newRT);
  },
};

const mutations = {
  updateResponse: (state, newResponse) => (state.response = [...newResponse]),
  updateRT: (state, newRT) => (state.RT = [...newRT]),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
