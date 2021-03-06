// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from "vue";

export const state = () => ({
  chapterStateInitialized: false,
  chapterState: { _mutationCount: -1 },
  staticData: {},
  sections: [],
  currentRenderGroup: 0,
  currentSection: 0,
});

export const getters = {
  staticData(state) {
    return { ...state.staticData };
  },
};

export const mutations = {
  setStaticData(state, { name, data }) {
    Vue.set(state.staticData, name, data);
  },

  initializeChapterState(state, { initialState }) {
    if (!state.chapterStateInitialized) {
      Object.keys(initialState).forEach((key) =>
        Vue.set(state.chapterState, key, initialState[key])
      );
      state.chapterState._mutationCount += 1;
      state.chapterStateInitialized = true;
    }
  },

  updateChapterState(state, { key, value }) {
    state.chapterState[key] = value;
    state.chapterState._mutationCount += 1;
  },

  initializeSections(state, { sectionsData }) {
    state.sections = sectionsData.map(
      (sectionData) => sectionData.renderGroups.length
    );
  },

  prevSection(state) {
    // if (state.currentRenderGroup > 0) {
    //   state.currentRenderGroup--;
    // } else if (state.currentSection > 0) {
    //   state.currentSection--;
    //   state.currentRenderGroup = state.sections[state.currentSection] - 1;
    // }
    if (state.currentSection > 0) {
      state.currentSection -= 1;
      return true;
    }
    return false;
  },

  nextSection(state) {
    // if (state.currentRenderGroup + 1 >= state.sections[state.currentSection]) {
    //   if (state.sections + 1 == state.sections.length) {
    //     return false;
    //   }
    //   state.currentRenderGroup = 0;
    //   state.currentSection++;
    //   return true;
    // }
    // state.currentRenderGroup++;
    if (state.currentSection + 1 < state.sections.length) {
      state.currentSection += 1;
      return true;
    }
    return false;
  },

  setSection(state, { sectionNumber }) {
    if (sectionNumber >= 0 && sectionNumber < state.sections.length) {
      state.currentSection = sectionNumber;
      return true;
    }
    return false;
  },
};
