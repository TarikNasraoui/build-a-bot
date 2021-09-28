import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";
import BrowsePart from "../parts/BrowsePart.vue";
import BrowseArms from "../parts/BrowseArms.vue";
import BrowseHeads from "../parts/BrowseHeads.vue";
import BrowseTorsos from "../parts/BrowseTorsos.vue";
import BrowseBases from "../parts/BrowseBases.vue";
import SideBarStandard from "../sidebars/SideBarStandard.vue";
import SideBarBuild from "../sidebars/SideBarBuild.vue";
import ShoppingCart from "../cart/ShoppingCart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: HomePage,
        sidebar: SideBarStandard
      }
    },
    {
      path: "/build",
      name: "Build",
      components: {
        default: RobotBuilder,
        sidebar: SideBarBuild
      }
    },
    {
      path: "/parts/browse",
      name: "BrowsePart",
      component: BrowsePart,
      children: [
        {
          path: "arms",
          name: "BrowseArms",
          component: BrowseArms
        },
        {
          path: "heads",
          name: "BrowseHeads",
          component: BrowseHeads
        },
        {
          path: "torsos",
          name: "BrowseTorsos",
          component: BrowseTorsos
        },
        {
          path: "bases",
          name: "BrowseBases",
          component: BrowseBases
        }
      ]
    },
    {
      path: "/part/:type/:id",
      name: "Part",
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValid = Number.isInteger(Number(to.params.id));
        next(isValid);
      }
    },
    {
      path: "/cart",
      name: "Cart",
      component: ShoppingCart
    }
  ]
});
