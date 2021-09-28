<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png"/>
    </div>
    <div class="get-stared">
      <p><router-link to="/build">Get started</router-link> and Build your custom robot</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    height: 300px;
  }
</style>
