type ProductId = string;
type Price = number;

type Product = {
  productId: ProductId,
  name: string,
  preTaxPriceInCents: number,
  category: ProductCategory,
}

type Inventory = {
  [prodID: ProductId]: Product
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

type CartItem = {
  category: ProductCategory,
  productId: ProductId,
  product: string,
  qty: number,
  itemPrice: Price,
}

type ReceiptByCategory = {
  totalPriceInCents: number,
  cartByCategory: Map<ProductCategory, CartItem[]>,
}

export {
  CartItem,
  Countries,
  Financial,
  Inventory,
  ItemState,
  Price,
  Product,
  ProductCategory,
  ProductId,
  ReceiptByCategory,
  ShoppingCartItem,
};
