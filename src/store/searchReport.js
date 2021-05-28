export default {
  namespaced: true,
  state() {
    return {
      patient: "",
      loadingStatus: false,
      failedMessage: "",
      statusCode: 0,
    };
  },
  mutations: {
    getPatient(state, patientRecord) {
      state.patient = patientRecord;
    },
    loadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus;
    },
    failedMessage(state, message) {
      state.failedMessage = message;
    },
  },
  actions: {
    getPatient({ commit }, payload) {
      commit("loadingStatus", true);
      commit("failedMessage", "");
      commit("getPatient", "");
      return $axios
        .get(`/patient_public/${payload}`)
        .then(({ data }) => {
          commit("getPatient", data);
          commit("loadingStatus", false);
        })
        .catch((err) => {
          commit("failedMessage", err.response.data.message);
          commit("loadingStatus", false);
        });
    },
  },
  getters: {
    patient(state) {
      return state.patient;
    },
    loadingStatus(state) {
      return state.loadingStatus;
    },
    failedMessage(state) {
      return state.failedMessage;
    },
    statusCode(state) {
      return state.statusCode;
    },
  },
};
