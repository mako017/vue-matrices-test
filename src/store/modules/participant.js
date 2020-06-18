// import axios from 'axios';

const state = {
  participant: {
    id: "fixedId",
    response: [],
    RT: [],
    log: [],
  },
};

const getters = {
  participant: state => state.participant,
};

const actions = {
  appendLog({ commit }, event) {
    console.log(event);

    let newLog = state.participant.log; //copy the current log Array
    newLog.push(event); //append the last event
    commit("upadteLog", newLog); //commit to the state
  },
  pushResponse({ commit }, response) {
    response = response.map(item => +item).join(""); //convert bool and join to one string
    let newResponse = state.participant.response; // copy the current response Array
    newResponse.push(response); //append the last response
    commit("updateResponse", newResponse); //commit to the state
  },
  pushRT({ commit }, RT) {
    let newRT = state.participant.RT; //copy the current RT Array
    newRT.push(RT); //append the last RT
    commit("updateRT", newRT); //commit to the state
  },
};

const mutations = {
  upadteLog: (state, newLog) => (state.log = [...newLog]),
  updateResponse: (state, newResponse) => (state.participant.response = [...newResponse]),
  updateRT: (state, newRT) => (state.participant.RT = [...newRT]),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
