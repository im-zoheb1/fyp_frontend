import router from "../router/index";

export default {
  namespaced: true,
  state() {
    return {
      loadingStatus: false,
      failedMessage: "",
      statusCode: 0,
      // form data
      username: "",
      email: "",
      organization: "",
      address: "",
      password: "",
      confirmPassword: "",
    };
  },
  mutations: {
    loadingStatus: (state, newLoadingState) =>
      (state.loadingStatus = newLoadingState),
    failedMessage: (state, message) => (state.failedMessage = message),
    // updating form data
    username: (state, payload) => (state.username = payload),
    email: (state, payload) => (state.email = payload),
    organization: (state, payload) => (state.organization = payload),
    address: (state, payload) => (state.address = payload),
    password: (state, payload) => (state.password = payload),
    confirmPassword: (state, payload) => (state.confirmPassword = payload),
    // clear form data
    clearForm: (state) => {
      state.username = "";
      state.email = "";
      state.organization = "";
      state.address = "";
      state.password = "";
      state.confirmPassword = "";
      state.failedMessage = "";
    },
  },
  actions: {
    registerUser({ commit, state }) {
      commit("loadingStatus", true);
      commit("failedMessage", "");
      // FORM DATA
      const registerFormData = new FormData();
      registerFormData.append("username", state.username);
      registerFormData.append("email", state.email);
      registerFormData.append("organization", state.organization);
      registerFormData.append("address", state.address);
      registerFormData.append("password", state.password);
      // PRODUCT IMAGE API
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      return $axios
        .post("/register", registerFormData, config)
        .then((res) => {
          router.push({
            name: "Verification",
            params: { username: state.username },
          });
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
