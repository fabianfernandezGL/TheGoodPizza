import { z } from 'zod'

export const TAX = 0.13

// Form constants
export const EMAIL_VALIDATION = z
  .string()
  .min(3, 'Email is required')
  .email('Email is invalid')

export const PASSWORD_VALIDATION = z
  .string()
  .min(8, 'Password must be more than 8 characters')
  .max(32, 'Password must be less than 32 characters')

export const NAME_VALIDATION = z.string().min(2, 'Name is required')

export const PHONE_VALIDATION = z
  .string()
  .min(8, 'Phone number must be 8 digits')
  .max(8, 'Phone number must be 8 digits')
