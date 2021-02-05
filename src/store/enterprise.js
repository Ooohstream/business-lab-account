import { getEnt, getEnts } from '@/services/enterprise.service';

const mutations = {
  setEnt(state, ent) {
    state.ent = ent;
  },
  setEnts(state, ent) {
    state.ent = ent;
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
  async fetchEnts({ commit }) {
    try {
      const ents = await getEnts();
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
