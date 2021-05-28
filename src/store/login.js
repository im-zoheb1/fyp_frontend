export default {
  namespaced: true,
  state() {
    return {
      username: "",
      password: "",
      loadingStatus: false,
      failedMessage: "",
    };
  },
  mutations: {
    loadingStatus: (state, newLoadingState) =>
      (state.loadingStatus = newLoadingState),
    failedMessage: (state, message) => (state.failedMessage = message),
    // updating form data
    username: (state, payload) => (state.username = payload),
    password: (state, payload) => (state.password = payload),
    // clear form data
    clearForm: (state) => {
      state.username = "";
      state.password = "";
    },
  },
  actions: {
    login: ({ state, commit }) => {
      commit("loadingStatus", true);
      commit("failedMessage", "");
      // FORM DATA
      const registerFormData = new FormData();
      registerFormData.append("username", state.username);
      registerFormData.append("password", state.password);
      // axios configurationi
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      return $axios
        .post("/login", registerFormData, config)
        .then((res) => {
          localStorage.setItem("refresh_token", res.data.refresh_token);
          location.replace("https://dashboard-ccidentifier.netlify.com");
          commit("loadingStatus", false);
          commit("clearForm");
        })
        .catch((err) => {
          commit("loadingStatus", false);
          commit("failedMessage", err.response.data.message);
        });
    },
  },
  getters: {
    loadingStatus: (state) => state.loadingStatus,
    failedMessage: (state) => state.failedMessage,
  },
};
