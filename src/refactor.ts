import {
  allowInCart,
  reformatInventory,
  toCartPrice,
} from './cart.js';
import { ExchangeRates } from './data/exchange-rates.js';
import { ProductCatalog } from './data/products.js';
import { ShoppingCart } from './data/shopping-cart.js';
import {
  CartItem,
  Countries,
  Inventory,
  ShoppingCartItem,
} from './types/types.js';

const currency = ExchangeRates[Countries.DE];
const inventory: Inventory = ProductCatalog.reduce(reformatInventory, {});

const augmentCartItem = (cartItem: ShoppingCartItem): CartItem => ({
  category: inventory[cartItem.productId].category,
  productId: cartItem.productId,
  product: inventory[cartItem.productId].name,
  qty: cartItem.qty,
  itemPrice: inventory[cartItem.productId].preTaxPriceInCents * currency.rate,
})

const totalPriceInCents = ShoppingCart
  .filter(allowInCart)
  .map(augmentCartItem)
  .reduce(toCartPrice, 0)

console.log('Total price: €', Math.round(totalPriceInCents) / 100);

