<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <button class="cart-btn" @click="$emit('toggle-cart')">
      Cart ({{ total }})
    </button>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const total = computed(()=>store.getters['cart/totalItems']);
</script>

<style scoped>
.header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;}
.nav{display:flex;gap:16px;}
.cart-btn{border:1px solid #e5e7eb;background:#fff;padding:6px 10px;border-radius:8px;}
</style>
