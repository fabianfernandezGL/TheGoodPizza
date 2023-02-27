import { CardType } from 'global.types'
import {
  capitalizeText,
  formatCreditCard,
  formatPhoneNumber,
  getCardType,
  validateCardNumber,
  validateCreditCardExpirationDate,
  validateCVV,
} from './textHelper'

test('capitalizeText capitalizes correctly', () => {
  expect(capitalizeText('Hello world!')).toBe('Hello World!')
})

describe('phone number formatting', () => {
  it('should parse the phone number correctly', () => {
    const expected = '(+506) 1234-5678'
    const result = formatPhoneNumber('12345678')
    expect(result).toEqual(expected)
  })

  it('should accept and include an optional international code', () => {
    const expected = '(+506) 1234-5678'
    const result = formatPhoneNumber('+50612345678')
    expect(result).toEqual(expected)
  })

  it('should ignore non digits characters, if present', () => {
    const expected = '(+506) 1234-5678'
    const result = formatPhoneNumber('(+506)-1-2-3-4--5-6-7-8')
    expect(result).toEqual(expected)
  })

  it('should return the same phone number when formatting fails', () => {
    const expected = 'invalidNumber'
    const result = formatPhoneNumber('invalidNumber')
    expect(result).toEqual(expected)
  })
})

describe('formatCreditCard()', () => {
  it('should correctly format a card number with 16 digits', () => {
    const cardNumber = '8888888888888888'
    const result = formatCreditCard(cardNumber)

    expect(result).toEqual('XXXX XXXX XXXX 8888')
  })

  it('should not format the card with an invalid number of digits', () => {
    const cardNumber = '8888'
    const result = formatCreditCard(cardNumber)

    expect(result).toEqual('8888')
  })
})

describe('getCardType', () => {
  // Tests for Visa card type
  it('should return Visa when given a valid Visa card number', () => {
    expect(getCardType('4111111111111111')).toBe(CardType.visa)
  })

  // Tests for Mastercard card type
  it('should return Mastercard when given a valid Mastercard card number', () => {
    expect(getCardType('5105105105105100')).toBe(CardType.mastercard)
  })

  // Tests for American Express card type
  it('should return American Express when given a valid American Express card number', () => {
    expect(getCardType('371449635398431')).toBe(CardType.amex)
  })

  // Tests for Discover card type
  it('should return Discover when given a valid Discover card number', () => {
    expect(getCardType('6011000990139424')).toBe(CardType.discover)
  })

  // Tests for Diners Club card type
  it('should return Diners Club when given a valid Diners Club card number', () => {
    expect(getCardType('36487621459343')).toBe(CardType.diners)
  })

  // Tests for JCB card type
  it('should return JCB when given a valid JCB card number', () => {
    expect(getCardType('3562116048628182962')).toBe(CardType.jcb)
  })

  it('should return undefined if no matching card type is found', () => {
    expect(getCardType('9999678876453234')).toBeUndefined()
  })
})

describe('validateCardNumber', () => {
  test('An invalid card number must return false', () => {
    expect(validateCardNumber('42285')).toBe(false)
  })

  test('A valid card number must return true', () => {
    expect(validateCardNumber('4098881234123445')).toBe(true)
  })

  test('An empty string must return false', () => {
    expect(validateCardNumber('')).toBe(false)
  })
})

describe('validateCVV', () => {
  it('should return true for valid CVV number', () => {
    expect(validateCVV('123')).toBe(true)
    expect(validateCVV('1234')).toBe(true)
  })

  it('should return false for invalid CVV number', () => {
    expect(validateCVV('abcd')).toBe(false)
    expect(validateCVV('1')).toBe(false)
    expect(validateCVV('12345')).toBe(false)
  })
})

const currYearFourDigits = new Date().getUTCFullYear()
const currYearTwoDigits = parseInt(currYearFourDigits.toString().slice(2))

describe('validateCreditCardExpirationDate()', () => {
  it('should return false if expiration date is not valid', () => {
    // Date must be in format "MM/YY" or "MM/YYYY"
    expect(validateCreditCardExpirationDate('11/202020')).toBe(false)
    expect(validateCreditCardExpirationDate('03')).toBe(false)
    expect(validateCreditCardExpirationDate('03/1')).toBe(false)
    expect(
      validateCreditCardExpirationDate(`10/${currYearFourDigits + 1}`)
    ).toBe(true)
    expect(
      validateCreditCardExpirationDate(`10/${currYearTwoDigits + 1}`)
    ).toBe(true)

    // Date must not be in the past
    expect(validateCreditCardExpirationDate('12/2010')).toBe(false)
    expect(validateCreditCardExpirationDate('12/10')).toBe(false)

    // Month range 1 to 12
    expect(
      validateCreditCardExpirationDate(`13/${currYearFourDigits + 1}`)
    ).toBe(false)

    // Year must have two or four digits
    expect(validateCreditCardExpirationDate('12/20')).toBe(false)
  })

  it('should return true if expiration date is valid', () => {
    expect(
      validateCreditCardExpirationDate(`10/${currYearFourDigits + 1}`)
    ).toBe(true)
    expect(
      validateCreditCardExpirationDate(`10/${currYearTwoDigits + 1}`)
    ).toBe(true)
  })
})
