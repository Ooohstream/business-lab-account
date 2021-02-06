import { getEnt, getEnts } from '@/services/enterprise.service';

const mutations = {
  setEnt(state, ent) {
    state.ent = ent;
  },
  setEnts(state, ents) {
    state.ents = ents;
  },
  setEntError(state, e) {
    state.entError = e;
  },
};

const actions = {
  async fetchEnt({ commit }, id, token) {
    try {
      const ent = await getEnt(id, token);
      commit('setEnt', ent);
    } catch (e) {
      commit('setEntError', e);
    }
  },
  async fetchEnts({ commit }, token) {
    try {
      const ents = await getEnts(token);
      commit('setEnts', ents);
    } catch (e) {
      commit('setEntError', e);
    }
  },
};

const getters = {
  ent: ({ ent }) => ent,
  ents: ({ ents }) => ents,
  entError: ({ entError }) => entError,
};

const state = () => ({
  ent: {},
  ents: [],
  entError: null,
});

export default {
  state,
  mutations,
  actions,
  getters,
};
