import { ExchangeRates } from './data/exchange-rates.js';
import { ProductCatalog } from './data/products.js';
import { ShoppingCart } from './data/shopping-cart.js';
import { Countries, ItemState } from './types/types.js';

const currency = ExchangeRates[Countries.DE];
let totalPriceInCents: number = 0;
let fullCart = [];

for (let cartItem of ShoppingCart) {
  if (cartItem.status === ItemState.WISHLIST) continue;
  for (let inventory of ProductCatalog) {
    if (cartItem.productId !== inventory.productId) continue;

    const fullItem = {
      productId: cartItem.productId,
      productName: inventory.name,
      qty: cartItem.qty,
      itemPrice: inventory.preTaxPriceInCents * currency.rate,
      category: inventory.category,
    }

    fullCart.push(fullItem);
    totalPriceInCents +=
      (fullItem.qty * fullItem.itemPrice * (1 + currency.salesTax));

  }
}

console.log('RESULT', fullCart);
console.log('Total price: €', Math.round(totalPriceInCents) / 100);


