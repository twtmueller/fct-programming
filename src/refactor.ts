import {
  allowInCart,
  augmentCartItemFrom,
  reformatInventory,
  toCartPrice,
} from './cart.js';
import { ProductCatalog } from './data/products.js';
import { ShoppingCart } from './data/shopping-cart.js';
import { Inventory } from './types/types.js';

const inventory: Inventory = ProductCatalog.reduce(reformatInventory, {});
const augmentCartItem = augmentCartItemFrom(inventory);

const totalPriceInCents = ShoppingCart
  .filter(allowInCart)
  .map(augmentCartItem)
  .reduce(toCartPrice, 0)

console.log('Total price: €', Math.round(totalPriceInCents) / 100);
