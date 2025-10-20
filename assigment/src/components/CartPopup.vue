<template>
  <div v-if="open" class="overlay" @click.self="$emit('close')">
    <div class="panel">
      <header class="panel-head">
        <h3>Cart</h3><button @click="$emit('close')">×</button>
      </header>

      <div v-if="!items.length" class="empty">Your cart is empty.</div>

      <ul v-else class="list">
        <li v-for="it in items" :key="it.id" class="row">
          <img v-if="it.image" :src="it.image" alt="" />
          <div class="meta"><div class="title">{{ it.title }}</div><div class="price">{{ money(it.price) }}</div></div>
          <div class="qty">
            <button @click="dec(it.id)">−</button><span>{{ it.qty }}</span><button @click="inc(it.id)">+</button>
          </div>
          <button class="remove" @click="remove(it.id)">Remove</button>
        </li>
      </ul>

      <footer v-if="items.length" class="panel-foot">
        <div>Total: <strong>{{ money(total) }}</strong></div>
        <button class="checkout" @click="checkout">Checkout</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { computed } from 'vue'
import { useStore } from 'vuex'


defineProps({
  open: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const store = useStore()
const items = computed(() => store.state.cart.items)
const total = computed(() => store.getters['cart/totalPrice'])

const money  = n  => `€${Number(n).toFixed(2)}`
const inc    = id => store.commit('cart/INC', id)
const dec    = id => store.commit('cart/DEC', id)
const remove = id => store.commit('cart/REMOVE', id)
const checkout = () => { alert('Demo checkout'); emit('close') }
</script>

<style scoped>
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);display:grid;place-items:center;}
.panel{width:min(680px,92vw);background:#fff;border-radius:12px;overflow:hidden;}
.panel-head,.panel-foot{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #eee;}
.panel-foot{border-top:1px solid #eee;border-bottom:none;}
.list{list-style:none;margin:0;padding:0;max-height:55vh;overflow:auto;}
.row{display:grid;grid-template-columns:64px 1fr auto auto;gap:12px;align-items:center;padding:12px 16px;border-bottom:1px solid #f3f4f6;}
.row img{width:64px;height:64px;object-fit:cover;border-radius:8px;background:#f3f4f6;}
.title{font-weight:600}.price{color:#374151}
.qty{display:flex;align-items:center;gap:8px}.qty button{width:28px;height:28px}
.remove{border:none;background:transparent;color:#b91c1c}
.checkout{border:1px solid #0f172a;background:#0f172a;color:#fff;padding:8px 12px;border-radius:8px}
</style>
