<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('£')}}

          </td>
        </tr>
      </tbody>
    </table>
    <h1 class="salesCart">Items On Sale</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in salesItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('£')}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>

export default {
  name: 'Cart',
  // filters: { currency: currencyFilter },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    salesItems() {
      return this.$store.getters['robots/salesItems'];
    }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .salesCart {
    color: red;
    margin-top: 20px;
  }
</style>
