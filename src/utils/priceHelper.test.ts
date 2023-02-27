import { TAX } from 'constants/general'
import { getTax } from './priceHelper'

test('Calculates correct tax amount', () => {
  const totalBeforeTax = 25
  const expectedTaxAmount = totalBeforeTax * TAX

  expect(getTax(totalBeforeTax)).toBe(expectedTaxAmount)
})
