import {
  calculateTotals,
  removeItemFromCart,
  removeItemQtyFromCart,
  addItemQtyFromCart,
  itemInCart,
} from './utils'
import { SAMPLE_ORDER as MOCK_SAMPLE_ORDER } from 'test/mocks'

let SAMPLE_ORDER = { ...MOCK_SAMPLE_ORDER }

describe('Cart Helper tests', () => {
  beforeEach(() => {
    SAMPLE_ORDER = { ...MOCK_SAMPLE_ORDER }
  })
  describe('calculateTotals', () => {
    test('should return a new object with updated information', () => {
      expect(calculateTotals(SAMPLE_ORDER)).toEqual({
        ...SAMPLE_ORDER,
        items: [
          SAMPLE_ORDER.items[0],
          { ...SAMPLE_ORDER.items[1], total: 64 },
          SAMPLE_ORDER.items[2],
        ],
        subTotalPrice: 104,
        tax: 13.52,
      })
    })
  })

  describe('removeItemFromCart', () => {
    test('should return a new array filtered by the itemNameToRemove parameter', () => {
      expect(
        removeItemFromCart(
          SAMPLE_ORDER.items,
          SAMPLE_ORDER.items[0].itemInfo.name
        )
      ).toEqual(SAMPLE_ORDER.items.slice(1))
    })
  })

  describe('removeItemQtyFromCart', () => {
    test('should return a new array filtered with the removed qty from the given itemNameToRemove', () => {
      expect(
        removeItemQtyFromCart(
          SAMPLE_ORDER.items,
          SAMPLE_ORDER.items[1].itemInfo.name,
          1
        )
      ).toEqual([
        SAMPLE_ORDER.items[0],
        {
          ...SAMPLE_ORDER.items[1],
          quantity: 3,
        },
        SAMPLE_ORDER.items[2],
      ])
    })
  })

  describe('addItemQtyFromCart', () => {
    test('should return a new array after adding the qty to the given itemNameToAdd', () => {
      expect(
        addItemQtyFromCart(
          SAMPLE_ORDER.items,
          SAMPLE_ORDER.items[1].itemInfo.name,
          1
        )
      ).toEqual([
        SAMPLE_ORDER.items[0],
        {
          ...SAMPLE_ORDER.items[1],
          quantity: 4,
        },
        SAMPLE_ORDER.items[2],
      ])
    })
  })

  describe('itemInCart', () => {
    test('should return true when the given itemName exists in the items array', () => {
      expect(
        itemInCart(SAMPLE_ORDER.items, SAMPLE_ORDER.items[1].itemInfo.name)
      ).toBeTruthy()
    })
  })
})
