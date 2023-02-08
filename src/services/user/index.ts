import {
  Address,
  Payment,
  PizzaOrderConfirmation,
  PizzaOrder,
} from 'global.types'
import { apiClient, apiConfig } from 'services/client'

const MANAGE_ADDRESSES_URI = '/users/addresses'
const MANAGE_PAYMENTS_URI = '/users/payments'
const ADD_ORDER_URI = '/users/orders'
const GET_ORDER_URI = '/users/orders/'

const saveAddresses = (addresses: Array<Address>) => {
  return apiClient
    .post(MANAGE_ADDRESSES_URI, addresses, apiConfig)
    .then(({ data }) => {
      const addresses = data as Array<Address>
      return addresses
    })
}

const savePayments = (payments: Array<Payment>) => {
  return apiClient
    .post(MANAGE_PAYMENTS_URI, payments, apiConfig)
    .then(({ data }) => {
      const addresses = data as Array<Payment>
      return addresses
    })
}

const addOrder = (order: Required<PizzaOrder>) => {
  return apiClient.post(ADD_ORDER_URI, order, apiConfig).then(({ data }) => {
    const order = data as PizzaOrderConfirmation
    return order
  })
}

const getOrderInfo = (orderId: string) => {
  return apiClient
    .get(`${GET_ORDER_URI}${orderId}`, apiConfig)
    .then(({ data }) => {
      const order = data as PizzaOrderConfirmation & PizzaOrder
      return order
    })
}

export { saveAddresses, savePayments, addOrder, getOrderInfo }
