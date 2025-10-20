<template>
  <main class="products">
    <h1>Products</h1>

    <div v-if="loading" class="state">Loading…</div>
    <div v-else-if="error" class="state error">{{ error }}</div>
    <div v-else-if="!products.length" class="state">No products found.</div>

    <section v-else class="grid">
      <article
        v-for="p in products"
        :key="p.id || p.code || p.product_id || p.uuid || p.sku"
        class="card"
      >
        <!-- Image box with discount badge -->
        <div class="img-wrap">
          <img :src="imageOf(p)" alt="" @error="onImgError" />
          <span v-if="discountPercent(p) > 0" class="badge">
            -{{ discountPercent(p) }}%
          </span>
        </div>

        <!-- Brand/Title -->
        <div class="meta">
          <div class="brand" v-if="brandOf(p)">{{ brandOf(p) }}</div>
          <h3 class="title">{{ titleOf(p) }}</h3>
        </div>

        <!-- Pricing block -->
        <div class="pricing">
          <div class="compare" v-if="comparePrice(p)">
            {{ money(comparePrice(p)) }}
          </div>
          <div class="price">{{ money(priceOf(p)) }}</div>
        </div>

        <!-- CTA -->
        <button class="add" @click="add(p)">
          Προσθήκη
          <svg viewBox="0 0 24 24" class="cart-ic" aria-hidden="true">
            <path d="M6 6h15l-1.5 9H8zM6 6L5 3H2"/>
            <circle cx="9" cy="20" r="1.6"/>
            <circle cx="18" cy="20" r="1.6"/>
          </svg>
        </button>
      </article>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const loading  = computed(()=>store.state.products.loading);
const error    = computed(()=>store.state.products.error);
const products = computed(()=>store.state.products.list);

const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#9ca3af">
      No image
    </text>
  </svg>`);
const onImgError = e => { e.target.src = PLACEHOLDER; };

const titleOf = (p) => p?.name || p?.title || 'Untitled';
const brandOf = (p) => p?.brand?.name || p?.brand_name || '';

const imageOf = (p) =>
  p?.image_versions?.thumb ||
  p?.image_versions?.original ||
  p?.thumbnail_url || p?.image_url ||
  PLACEHOLDER;

// current price: min(final/start) από assortments, αλλιώς suggested
const priceOf = (p) => {
  const pivots = Array.isArray(p?.assortments)
    ? p.assortments.map(a => a?.product_pivot).filter(Boolean)
    : [];
  const finals = pivots.map(pp => Number(pp?.final_price)).filter(n => n>0);
  const starts = pivots.map(pp => Number(pp?.start_price)).filter(n => n>0);
  const candidates = [...finals, ...starts];
  if (candidates.length) return Math.min(...candidates);
  if (p?.suggested_price) return Number(p.suggested_price);
  return 0;
};

// compare/original price: μέγιστο start/suggested για strike-through
const comparePrice = (p) => {
  const pivots = Array.isArray(p?.assortments)
    ? p.assortments.map(a => a?.product_pivot).filter(Boolean)
    : [];
  const starts = pivots.map(pp => Number(pp?.start_price)).filter(n => n>0);
  const cand = [...starts, Number(p?.suggested_price || 0)].filter(n => n>0);
  if (!cand.length) return 0;
  const comp = Math.max(...cand);
  return comp > priceOf(p) ? comp : 0;
};

const discountPercent = (p) => {
  const cmp = comparePrice(p);
  const cur = priceOf(p);
  if (!cmp || !cur || cmp <= cur) return 0;
  return Math.round(((cmp - cur) / cmp) * 100);
};

const money = n => `€${Number(n).toFixed(2)}`;

const add = (p) =>
  store.dispatch('cart/addToCart', {
    id: p.id,
    title: titleOf(p),
    image: imageOf(p),
    price: priceOf(p)
  });

onMounted(() => { store.dispatch('products/load'); });
</script>
<style scoped>
.products{ max-width: 1180px; margin: 24px auto; padding: 0 16px; }
h1{ margin: 0 0 16px; }

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}

.card{
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  padding: 12px;
  transition: box-shadow .2s ease, transform .2s ease;
}
.card:hover{
  box-shadow: 0 10px 24px rgba(0,0,0,.08);
  transform: translateY(-2px);
}

/* image box with fixed ratio */
.img-wrap{
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
  aspect-ratio: 1 / 1; /* τετράγωνο */
  display: grid; place-items: center;
}
.img-wrap img{
  width: 100%; height: 100%;
  object-fit: contain; /* δείχνει όλη τη συσκευασία καθαρά */
}

/* discount badge */
.badge{
  position: absolute; top: 10px; left: 10px;
  background: #ef4444; color: #fff; font-weight: 700;
  font-size: .9rem; line-height: 1;
  padding: 8px 10px; border-radius: 999px;
  box-shadow: 0 4px 12px rgba(239,68,68,.3);
}

/* meta */
.meta{ display: grid; gap: 4px; }
.brand{ font-size: .78rem; letter-spacing: .02em; color:#6b7280; text-transform: uppercase; }
.title{ margin: 0; font-size: .98rem; line-height: 1.35; }

/* pricing block */
.pricing{ display: flex; align-items: baseline; gap: 10px; }
.price{ font-weight: 800; color: #dc2626; font-size: 1.15rem; }
.compare{
  color: #9ca3af; text-decoration: line-through;
  font-size: .95rem;
}

/* CTA */
.add{
  margin-top: 2px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; height: 40px;
  border-radius: 999px;
  border: none;
  background: #0f172a; color: #fff; font-weight: 700;
  cursor: pointer;
}
.add:hover{ filter: brightness(1.05); }
.cart-ic{ width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

/* states */
.state{ padding: 16px; color:#374151; }
.error{ color:#b91c1c; }
</style>
