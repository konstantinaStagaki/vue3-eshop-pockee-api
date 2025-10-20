export default {
  namespaced: true,
  state: () => ({ items: [] }), // {id,title,price,image,qty}
  getters: {
    totalItems: s => s.items.reduce((a,x)=>a+x.qty,0),
    totalPrice: s => s.items.reduce((a,x)=>a+x.qty * Number(x.price||0),0),
  },
  mutations: {
    ADD(s, p){
      const i = s.items.findIndex(x=>x.id===p.id);
      if (i>=0) s.items[i].qty += p.qty || 1;
      else s.items.push({ ...p, qty: p.qty || 1 });
    },
    INC(s, id){ const it=s.items.find(x=>x.id===id); if (it) it.qty++; },
    DEC(s, id){ const it=s.items.find(x=>x.id===id); if (it && it.qty>1) it.qty--; },
    REMOVE(s, id){ s.items = s.items.filter(x=>x.id!==id); },
    CLEAR(s){ s.items = []; }
  },
  actions: {
    addToCart({ commit }, p){
      commit('ADD', {
        id: p.id || p.code || p.product_id,
        title: p.title || p.name,
        price: p.price || p.final_price || p.current_price || 0,
        image: p.image || p.image_url || p.thumbnail || '',
      });
    }
  }
}
