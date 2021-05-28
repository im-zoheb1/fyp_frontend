export default {
  namespaced: true,
  state() {
    return {
      message: "",
      loadingStatus: false,
    };
  },
  mutations: {
    message: (state, newMessage) => (state.message = newMessage),
    loadingStatus: (state, newLoadingStatus) =>
      (state.loadingStatus = newLoadingStatus),
  },
  actions: {
    sendConfirmation: ({ commit }, payload) => {
      commit("message", "");
      commit("loadingStatus", true);
      $axios
        .post(`/resend_confirmation/${payload}`)
        .then(({ data }) => {
          commit("message", data.message);
          commit("loadingStatus", false);
        })
        .catch(({ response }) => {
          commit("message", "");
          commit("loadingStatus", false);
        });
    },
  },
  getters: {
    message: (state) => state.message,
    loadingStatus: (state) => state.loadingStatus,
  },
};
