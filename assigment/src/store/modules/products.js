import { fetchProducts } from '@/api/products';

function pickArray(data) {
  // Το API σου γυρνάει { data: [ ... ] }
  if (Array.isArray(data?.data)) return data.data; // <-- βασικό
  if (Array.isArray(data)) return data;            // fallback
  // άλλα συνηθισμένα keys για ασφάλεια
  for (const k of ['results','products','items','payload']) {
    if (Array.isArray(data?.[k])) return data[k];
  }
  return [];
}

export default {
  namespaced: true,
  state: () => ({ list: [], loading: false, error: null, raw: null }),
  mutations: {
    SET_LOADING(s,v){ s.loading=v; },
    SET_PRODUCTS(s,a){ s.list=a||[]; },
    SET_ERROR(s,e){ s.error=e; },
    SET_RAW(s,r){ s.raw=r; }
  },
  actions: {
    async load({ commit }) {
      commit('SET_LOADING', true); commit('SET_ERROR', null);
      try {
        const data = await fetchProducts();
        commit('SET_RAW', data);
        commit('SET_PRODUCTS', pickArray(data));
      } catch (e) {
        commit('SET_ERROR', e?.message || 'Failed to load products');
      } finally { commit('SET_LOADING', false); }
    }
  }
}
