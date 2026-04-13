type Product = {
  productId: string,
  name: string,
  preTaxPriceInCents: number,
  category: ProductCategory,
}

enum ProductCategory {
  TOYS_AND_GAMES = "Toys and Games",
  FOOD = "Food",
  ELECTRONICS = "Electronics",
  CLOTHING = "Clothing",
  TRAVEL = "Travel",
}

type ShoppingCartItem = {
  productId: string,
  qty: number,
  status: ItemState,
}

enum ItemState {
  IN_CART,
  WISHLIST
}

type BillingItem = {
  productId: string,
  productName: string,
  qty: number,
  totalPrice: number,
}

type Financial = {
  rate: number,
  currency: string,
  salesTax: number,
}

enum Countries {
  DE = 'Germany',
  UK = 'United Kingdom',
  JP = 'Japan',
  US = 'USA',
}

export {
  Countries,
  Financial,
  ItemState,
  Product,
  ProductCategory,
  ShoppingCartItem,
}
