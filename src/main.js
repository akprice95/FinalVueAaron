import Vue from "vue";
import './Plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';


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


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
