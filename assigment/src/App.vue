
<template>
  <div id="app">
    <HeaderBar @toggle-cart="show=!show" />
    <main class="site-main"><router-view /></main>
    <CartPopup :open="show" @close="show=false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import CartPopup from '@/components/CartPopup.vue';
const show = ref(false);
</script>

<style>
#app {
  min-height: 100vh;
  background: #f9fafb;
  color: #111827;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  margin: 0;
}

.site-header {
  background: transparent;
  border-bottom: 1px solid #e5e7eb;
}

.nav {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  gap: 16px;
}


a.router-link-active {
  font-weight: 600;
  text-decoration: none;
}
.nav a:hover {
  opacity: 0.8;
  text-decoration: none;
}
</style>
