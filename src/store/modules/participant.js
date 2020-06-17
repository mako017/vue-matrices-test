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
    response = response.map(item => +item).join("");
    let newResponse = state.participant.response;
    newResponse.push(response);
    commit("updateResponse", newResponse);
    console.log(state.participant.response);
  },
  pushRT({ commit }, RT) {
    let newRT = state.participant.RT;
    newRT.push(RT), commit("updateRT", newRT);
  },
};

const mutations = {
  updateResponse: (state, newResponse) => (state.participant.response = [...newResponse]),
  updateRT: (state, newRT) => (state.participant.RT = [...newRT]),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
