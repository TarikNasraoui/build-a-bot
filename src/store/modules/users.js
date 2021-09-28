import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    foo: "users-foo"
  },
  getters: {
    foo(state, getters, rootState) {
      return `users-getter/${rootState.foo}`;
    }
  },
  mutations: {
    udpdateUsers(state, user) {
      state.users = user;
    }
  },
  actions: {
    singIn({ commit }, user) {
      axios
        .post("/api/sign-in", user)
        .then(result => commit("udpdateUsers", result.data))
        .error(error => console.log(console.log(error)));
    }
  }
};
