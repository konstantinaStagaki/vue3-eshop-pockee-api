// App entry point: creates the Vue app and mounts it to #app.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.css' // global CSS reset + tokens
import 'vue3-carousel/dist/carousel.css'
if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/');
}

createApp(App)
  .use(router)  // register vue-router
  .use(store)   // register vuex store (cart/products)
  .mount('#app')
