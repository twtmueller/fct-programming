import { ExchangeRates } from './data/exchange-rates.js';
import {
  CartItem,
  Countries,
  Inventory,
  ItemState,
  Product,
  ShoppingCartItem,
} from './types/types.js';

const currency = ExchangeRates[Countries.DE];

const reformatInventory = (acc: Inventory, product: Product) => {
  acc[product.productId] = product;
  return acc;
}

const allowInCart = (cartItem: ShoppingCartItem) => cartItem.status === ItemState.IN_CART

const toCartPrice = (acc: number, item: CartItem): number =>
  acc + item.qty * item.itemPrice * ( 1 + currency.salesTax )


export {
  allowInCart,
  reformatInventory,
  toCartPrice,
}
