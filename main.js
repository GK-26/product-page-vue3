const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart: function (id) {
      this.cart.push(id);
    },
  },
});
