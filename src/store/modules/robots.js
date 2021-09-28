import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: "robots-foo"
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updatePart(state, parts) {
      state.parts = parts;
    }
  },
  getters: {
    salesItems(state) {
      return state.cart.filter(item => item.head.onSale === true);
    },
    foo(state) {
      console.log(state);
      return `robots-getter/${state.foo}`;
    }
  },
  actions: {
    getParts({ commit }) {
      axios
        .get("/api/parts")
        .then(res => commit("updatePart", res.data))
        .catch(error => console.error(error));
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post("/api/cart", cart).then(() => commit("addRobotToCart", robot));
    }
  }
};
