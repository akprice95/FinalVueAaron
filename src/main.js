import Vue from "vue";
import Vuetify from 'vuetify';
import './Plugins/vuetify';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import '@mdi/font/css/materialdesignicons.css';
import VueResouce from 'vue-resource';

Vue.directive("aaron", {
  bind(el){
    el.style.color = "red";
  }
});


Vue.use(VueResouce);

Vue.use(Vuetify, {
 iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})



Vue.use(Vuelidate)

Vue.directive('box-shadow', {
  bind(el, binding){
    if (binding.arg === 'offset'){
      el.style.boxShadow = '0px ${binding.value}px 5px #666'
    }
    else{
    el.style.boxShadow = '0px 3px 5px #666'
    }
  }

})


import 'material-design-icons-iconfont/dist/material-design-icons.css';// Ensure you are using css-loader


Vue.use(Vuetify, {
 iconfont: 'mdi'
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
