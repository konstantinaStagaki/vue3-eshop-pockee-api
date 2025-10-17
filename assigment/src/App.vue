<template>
  <div id="app">

    <header class="site-header">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
      </nav>
    </header>


    <main class="site-main">
      <router-view />
    </main>
  </div>
</template>

<script setup>

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
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.nav {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  gap: 16px;
}

.site-main {
  width: 100%;
  max-width: none;
  margin: 0;  
  padding: 0; 
}

a.router-link-active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
