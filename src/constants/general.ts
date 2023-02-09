import { z } from 'zod'

export const TAX = 0.13

export const THE_GOOD_PIZZA_POSITION: google.maps.LatLngLiteral = {
  lat: 9.939034,
  lng: -84.1093,
}

// Form constants
export const EMAIL_VALIDATION = z
  .string()
  .min(3, 'Oops! You forgot the email.')
  .email(
    `Whoops! It looks like that email address isn't valid. Please try again.`
  )

export const PASSWORD_VALIDATION = z
  .string()
  .min(8, 'We like passwords with more than 8 characters')
  .max(
    32,
    'Hold on! This password is so strong! Try with less than 32 characters'
  )

export const NAME_VALIDATION = z.string().min(2, 'Name is required')

export const PHONE_VALIDATION = z
  .string()
  .min(8, 'Phone number must be 8 digits')
  .max(8, 'Phone number must be 8 digits')
