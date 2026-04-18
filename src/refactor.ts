import {
  allowInCart,
  augmentCartItemFrom,
  receiptByCategory,
  reformatInventory,
  toCartPrice,
} from './cart.js';
import { ProductCatalog } from './data/products.js';
import { ShoppingCart } from './data/shopping-cart.js';
import { CartItem, Inventory, ReceiptByCategory } from './types/types.js';

let groupedItems: ReceiptByCategory = {
  totalPriceInCents: 0,
  cartByCategory: new Map(),
}

const groupByCategory = (cartItem: CartItem) => cartItem.category;
const groupByPrice = (cartItem: CartItem) => {
  if (cartItem.itemPrice > 1000) return 'expensive';
  else return 'normal'
}


const inventory: Inventory = ProductCatalog.reduce(reformatInventory, {});
const augmentCartItem = augmentCartItemFrom(inventory);

const groupedCart = ShoppingCart
  .filter(allowInCart)
  .map(augmentCartItem)
  .reduce(receiptByCategory(groupByPrice), groupedItems)

console.log('Grouping:', groupedCart.cartByCategory);
console.log('Total price: €', Math.round(groupedCart.totalPriceInCents) / 100);
