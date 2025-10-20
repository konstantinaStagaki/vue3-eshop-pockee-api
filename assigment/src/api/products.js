import { client } from './client';

export async function fetchProducts(params = {}) {
  const { data } = await client.get('/api/products.php', {
    params: { assortment_id: 14, in_stock: true, ...params }
  });
  return data;
}
