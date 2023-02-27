import { Address, Payment, PizzaOrder } from 'global.types'

export const SAMPLE_ORDER: PizzaOrder = {
  savingsPercent: 0.05,
  subTotalPrice: 56,
  expressPrice: 5,
  tax: 7.28,
  items: [
    {
      itemInfo: {
        name: 'VEGGIE FEST',
        weight: 520,
        weightType: 'g',
        calories: 1000,
        description:
          'We think in veggies! Mushrooms, purple basil, capers and our famous secret veggie mix.',
        price: 12,
      },
      quantity: 1,
      total: 12,
    },
    {
      itemInfo: {
        name: 'SALAMI & TOMATO',
        weight: 560,
        weightType: 'g',
        calories: 1500,
        description:
          'What a perfect combination of salami, tomato wedges and sage. Tastes just like home.',
        price: 16,
      },
      quantity: 4,
      total: 16,
    },
    {
      itemInfo: {
        name: 'EGG & BASIL',
        weight: 520,
        weightType: 'g',
        calories: 1200,
        description:
          'Our famous egg, basil, capers and black pepper. Don’t knock it ’til you try it.',
        price: 14,
      },
      quantity: 2,
      total: 28,
    },
  ],
}

export const SAMPLE_ADDRESS: Address = {
  city: 'San José',
  isDefault: true,
  name: 'Office',
  phoneNumber: '88888888',
  state: 'SJO',
  street1: 'Some place',
  zip: '323232',
  street2: 'This is to be specific',
}

export const SAMPLE_PAYMENT: Payment = {
  cardNumber: '5352579176355697',
  cvv: '458',
  expiration: '07/2023',
  isDefault: true,
  name: 'Personal',
  nameOnCard: 'John Doe',
}

export const SAMPLE_FINAL_ORDER: PizzaOrder = {
  ...SAMPLE_ORDER,
  address: { ...SAMPLE_ADDRESS },
  payment: { ...SAMPLE_PAYMENT },
}
