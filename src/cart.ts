import { Inventory, Product } from './types/types.js';

const reformatInventory = (acc: Inventory, product: Product) => {
  acc[product.productId] = product;
  return acc;
}


export {
  reformatInventory
}
