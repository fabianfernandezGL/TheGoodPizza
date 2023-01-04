import { TAX } from 'constants/general'

/**
 * Calculates the tax amount for a given price.
 * @param {number} totalBeforeTax The price before tax
 * @return {number} Tax amount
 */
export function getTax(totalBeforeTax: number): number {
  return totalBeforeTax * TAX
}
