import Vue from "vue";
import Router from "vue-router";
import Home from "./Views/Home.vue";
import Layout from "./Views/Layout.vue";

import Stats from './components/ChildViews/Stats'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children:[ {
  path:"/stats",
  component: Stats,
  name: "stats"
      } ]
    },

    
    {
    path: "/layout",
    name: "layout",
    component: Layout
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./Views/About.vue")
    },
  
  ]
});