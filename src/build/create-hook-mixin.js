export default {
  created() {
    this.$store.dispatch("robots/getParts");
  }
};
