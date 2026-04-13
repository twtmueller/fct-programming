import { Financial, Countries } from '../types/types.js';

export const ExchangeRates: Record<Countries, Financial> = {
  [Countries.DE]: {
    rate: 1,
    currency: "€",
    salesTax: 0.18,
  },
  [Countries.UK]: {
    rate: 0.78,
    currency: "£",
    salesTax: 0.20,
  },
  [Countries.JP]: {
    rate: 89.4,
    currency: "¥",
    salesTax: 0.18,
  },
  [Countries.US]: {
    rate: 0.97,
    currency: "$",
    salesTax: 0.06,
  }
}
