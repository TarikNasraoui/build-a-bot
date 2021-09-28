<template>
  <div id="app">
     Root Foo: {{rootFoo}} <br/>
    Robots Foo: {{robotsFoo}} <br/>
    Users Foo: {{usersFoo}} <br/>
    <br/>
    Root Getter Foo: {{rootGetterFoo}} <br/>
    Robots Getter Foo: {{robotsGetterFoo}} <br/>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png"/>
              Buil a robot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Buil
            </router-link>
          </li>
          <li class="nav-item cart-items">
            <router-link class="nav-link" to="/cart" exact>
              Cart ({{cart.length}})
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: state => state.users.foo
    }),
    ...mapState('robots', { robotsFoo: 'foo', cart: 'cart' }),
    ...mapGetters('robots', { robotsGetterFoo: 'foo' }),
    ...mapGetters('users', { rootGetterFoo: 'foo' })

    // cart() {
    //   return this.$store.state.robots.cart;
    // }
    // robotsGetterFoo() {
    //   return this.$store.getters['robots/foo'];
    // },
    // rootGetterFoo() {
    //   console.log(this.$store.getters['users/foo']);
    //   return this.$store.getters['users/foo'];
    // }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.cart-items {
  float: right;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
