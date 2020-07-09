// import axios from 'axios';

const state = {
  participant: {
    id: "fixedId",
    response: [],
    solved: [],
    RT: [],
    log: [],
  },
};

const getters = {
  participant: state => state.participant,
};

const actions = {
  appendLog({ commit }, event) {
    let newLog = state.participant.log; //copy the current log Array
    newLog.push(event); //append the last event
    commit("upadteLog", newLog); //commit to the state
  },
  pushResponse({ commit }, response) {
    let newResponse = state.participant.response; // copy the current response Array
    newResponse.push(response); //append the last response
    commit("updateResponse", newResponse); //commit to the state
  },
  pushRT({ commit }, RT) {
    let newRT = state.participant.RT; //copy the current RT Array
    newRT.push(RT); //append the last RT
    commit("updateRT", newRT); //commit to the state
  },
  pushSolution({ commit }, solution) {
    let newSolved = [...state.participant.solved];
    newSolved.push(solution);
    commit("updateSolved", newSolved);
    console.log(state.participant.solved);
  },
  updateID: ({ commit }, newID) => commit("updateID", newID),
};

const mutations = {
  updateID: (state, newID) => (state.participant.id = newID),
  upadteLog: (state, newLog) => (state.participant.log = [...newLog]),
  updateResponse: (state, newResponse) => (state.participant.response = [...newResponse]),
  updateRT: (state, newRT) => (state.participant.RT = [...newRT]),
  updateSolved: (state, newSolved) => (state.participant.solved = newSolved),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
