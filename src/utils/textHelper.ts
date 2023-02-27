import { CardType } from 'global.types'

/**
 * Capitalize each word in a text.
 * @param {string} text Text to capitalize.
 * @return {string} Capitalized text
 */
export function capitalizeText(text: string): string {
  return text
    .split(' ')
    .map(
      (word) =>
        `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
    )
    .join(' ')
}

/**
 * Format a phone number. Receives a phone number '12345678' and it parsed it to "(+506) 1234-5678".
 * @param {string} phoneNumber Phone number to format. Allows the optional international code.
 * @return {string} Formated phone number or the same number if can't be formated.
 */
export function formatPhoneNumber(phoneNumber: string): string | null {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(506|)?(\d{4})(\d{4})$/)
  if (match) {
    const intlCode = '(+506)'
    return [intlCode, ' ', match[2], '-', match[3]].join('')
  }
  return phoneNumber
}

/**
 * Format a card number. Receives a card number '8888888888888888' and it parsed it to "XXXX XXXX XXXX 8888".
 * @param {string} cardNumber Card number to format.
 * @return {string} Formated card number or the same number if can't be formated.
 */
export function formatCreditCard(cardNumber: string): string | null {
  const cleaned = ('' + cardNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/)
  if (match) {
    return ['XXXX', ' ', 'XXXX', ' ', 'XXXX', ' ', match[3]].join('')
  }
  return cardNumber
}

/**
 * Returns the card type for a given card number.
 * @param {string} cardNumber Card number to get type.
 * @return {string} Card type.
 */
export function getCardType(cardNumber: string): CardType | undefined {
  // visa
  let re = new RegExp('^4')
  if (cardNumber.match(re) != null) return CardType.visa

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      cardNumber
    )
  )
    return CardType.mastercard

  // AMEX
  re = new RegExp('^3[47]')
  if (cardNumber.match(re) != null) return CardType.amex

  // Discover
  re = new RegExp(
    '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'
  )
  if (cardNumber.match(re) != null) return CardType.discover

  // Diners
  re = new RegExp('^36')
  if (cardNumber.match(re) != null) return CardType.diners

  // JCB
  re = new RegExp('^35(2[89]|[3-8][0-9])')
  if (cardNumber.match(re) != null) return CardType.jcb

  return undefined
}

/**
 * Returns if a card number is valid.
 * @param {string} input Card number to validate.
 * @return {boolean} is valid.
 */
export function validateCardNumber(input: string): boolean {
  const cardNumberRegex: RegExp = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/
  return cardNumberRegex.test(input)
}

/**
 * Returns if a CVV number is valid.
 * @param {string} cvvNumber CVV to validate.
 * @return {boolean} is valid.
 */
export function validateCVV(cvvNumber: string): boolean {
  const cvvRegEx = /^[0-9]{3,4}$/
  return cvvRegEx.test(cvvNumber)
}

/**
 * Returns if a expiration date is valid.
 * @param {string} expirationDate CVV to validate.
 * @return {boolean} is valid.
 */
export function validateCreditCardExpirationDate(
  expirationDate: string
): boolean {
  // Check if date is valid format
  const [month, year] = expirationDate.split('/')
  if (!month || !year) {
    return false
  }

  // Convert month and year to integers
  const monthInteger = parseInt(month) - 1 // Months are zero-based

  let yearInteger = parseInt(year)
  if (yearInteger < 100) {
    yearInteger += 2000
  }

  // Validate date
  const dateIsValid =
    // Date must not be in the past
    Date.now() <= new Date(yearInteger, monthInteger).getTime() &&
    // Month range 1 to 12
    monthInteger >= 0 &&
    monthInteger < 12 &&
    // Year must have two or four digits
    (year.length === 2 || year.length === 4)

  return dateIsValid
}
