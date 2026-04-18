import { ExchangeRates } from './data/exchange-rates.js';
import {
  CartItem,
  Countries,
  Inventory,
  ItemState,
  Product,
  ReceiptByCategory,
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

const augmentCartItemFrom =
  (inventory: Inventory) =>
    (cartItem: ShoppingCartItem): CartItem => ({
      category: inventory[cartItem.productId].category,
      productId: cartItem.productId,
      product: inventory[cartItem.productId].name,
      qty: cartItem.qty,
      itemPrice: inventory[cartItem.productId].preTaxPriceInCents * currency.rate,
    });

const receiptByCategory =
  (groupingFct: (ci: CartItem) => string) =>
    (acc: ReceiptByCategory, item: CartItem) => {
      const cartGroupIndex = groupingFct(item);
      addToGroup(acc.cartByCategory,cartGroupIndex, item);
      acc.totalPriceInCents += item.qty * item.itemPrice * ( 1 + currency.salesTax )
      return acc;
    }

const addToGroup = <K, V>(mapToAddTo: Map<K, V[]>, productGroup: K, value: V) => {
  const valuesForKey: V[] | undefined =
    (mapToAddTo.has(productGroup))
      ? mapToAddTo.get(productGroup)
      : (mapToAddTo.set(productGroup, [] as V[]) && mapToAddTo.get(productGroup));

  valuesForKey!.push(value);
}


export {
  allowInCart,
  augmentCartItemFrom,
  receiptByCategory,
  reformatInventory,
  toCartPrice,
}
